import { baseUrl } from '@/lib/baseUrl';

interface EmailData {
  email: string;
  name: string;
  message: string;
}

const BASE_URL = baseUrl();

export const sendEmail = async (email_payload: EmailData) => {
  try {
    const tokenResponse = await fetch(`${BASE_URL}/token`, {
      method: 'GET',
    }).then((token) => token.json());

    const { token } = tokenResponse;

    const sendEmailRes = await fetch(`${BASE_URL}/send-email`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email_payload),
    }).then((res) => res.json());

    if (sendEmailRes.status === 200) {
      return {
        status: 200,
        message: 'Email sent successfully.',
      };
    } else {
      return {
        status: 500,
        message: 'Email was not sent.',
      };
    }
  } catch (error) {
    return {
      status: 500,
      message: error,
    };
  }
};
