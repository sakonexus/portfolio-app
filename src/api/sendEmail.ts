interface EmailData {
  email: string;
  name: string;
  message: string;
}

export const sendEmail = async (email_payload: EmailData) => {
  try {
    const tokenResponse = await fetch('/api/token');
    const jwtToken = await tokenResponse.json();

    const emailResponse = await fetch(`/api/send-email`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtToken.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email_payload),
    });

    const emailData = await emailResponse.json();
    return emailData;
  } catch (error) {
    return error;
    throw error;
  }
};
