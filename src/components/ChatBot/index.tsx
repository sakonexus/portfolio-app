import { useState, useEffect, useRef } from 'react';

type Message = {
  from: 'user' | 'Bort';
  text: string;
};

export default function Chatbot() {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const [openBort, setOpenBort] = useState(false);

  function createMessage(from: 'user' | 'Bort', text: string): Message {
    return { from, text };
  }

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, createMessage('user', input)];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();

      console.log('res front end', data);

      setMessages([...newMessages, createMessage('Bort', data.text)]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        createMessage('Bort', 'Error getting answer.'),
      ]);
    } finally {
      setLoading(false);
    }
  };

  const toggleChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOpenBort(!openBort);
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        ...messages,
        createMessage(
          'Bort',
          "Hi, I'm BORT! I can tell you more about Sarkis."
        ),
      ]);
    }

    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTo({
        top: messagesEndRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages]);

  useEffect(() => {
    if (openBort) {
      inputRef.current?.focus();
    }
  }, [openBort]);

  return (
    <div>
      <div className="bottom-0 right-0 z-50 fixed">
        {openBort && (
          <div className="flex flex-col w-96 p-4 bg-white mr-8 border-zinc-300 border rounded-xl shadow-2xl">
            <div className="flex flex-col mb-4">
              <h2 className="font-semibold text-lg">
                This is BORT my AI buddy!
              </h2>
            </div>
            <div
              ref={messagesEndRef}
              className="border border-zinc p-4 h-52 overflow-auto rounded-xl flex gap-y-4 flex-col"
            >
              {messages.map((msg, i) => (
                <div
                  key={i}
                  style={{ textAlign: msg.from === 'user' ? 'right' : 'left' }}
                >
                  <div className="flex flex-row">
                    <div className="pr-2">
                      <strong>{msg.from === 'user' ? 'You' : 'BORT'}:</strong>
                    </div>
                    <div>{msg.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="py-4">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask BORT about me!"
                className="w-full border-2 border-zinc-300 p-4 rounded-full"
              />
            </div>
            <button
              className="bg-cyan-500 px-8 py-2 rounded-md"
              onClick={sendMessage}
              disabled={loading}
            >
              <p className="font-bold text-xl hover:cursor-pointer">
                {loading ? 'Thinking…' : 'Send'}
              </p>
            </button>
            <div className="flex flex-row items-baseline justify-end mt-4">
              <p className="font-semibold text-sm">Running on</p>&nbsp;
              <img
                src="/public/images/i/google_gemini_logo.svg"
                className="w-12"
              />
            </div>
          </div>
        )}
        <div className="flex justify-end m-8">
          <button
            onClick={(e) => toggleChat(e)}
            className="flex justify-center items-center w-16 h-16 bg-cyan-600 rounded-full hover:cursor-pointer shadow-xl border border-zinc-300"
          >
            <span className="material-icons text-white !text-4xl">
              chat_bubble_outline
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
