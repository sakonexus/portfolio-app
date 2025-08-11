import { Router, Request, Response } from 'express';
import { verifyToken } from '../middleware/auth';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { embedText } from '../lib/embed';

dotenv.config();

const EMAILJS_PRIVATE_KEY = process.env.EMAILJS_PRIVATE_KEY!;
const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID!;
const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID!;
const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY!;
const JWT_SECRET = process.env.JWT_SECRET!;

const router = Router();

router.get('/token', (req, res) => {
  const payload = {
    appId: 'my-super-secure-app-id',
    role: 'anonymous',
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1m' });

  res.json({ token });
});

router.post('/send-email', verifyToken, async (req: Request, res: Response) => {
  const { name, email, message } = req.body;

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: 'Request body is empty.' });
  }

  try {
    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          origin: 'http://localhost',
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          accessToken: EMAILJS_PRIVATE_KEY,
          template_params: {
            senderName: name,
            senderEmail: email,
            senderMessage: message,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText);
    }

    res.status(200).json({ status: 200, message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ status: 500, message: error });
  }
});

router.post('/chat', async (req, res) => {
  try {
    const { question } = req.body;
    if (!question)
      return res.status(400).json({ error: 'No question provided' });

    const answer = await embedText(question);

    return res.json({ text: answer });
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
