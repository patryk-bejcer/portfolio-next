import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL!;

interface EmailData {
  email: string;
  subject: string;
  message: string;
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // @ts-ignore
  const { email, subject, message } = (await req.json()) as EmailData;

  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [fromEmail, email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
}
