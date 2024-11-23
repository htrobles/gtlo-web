'use server';
import { connectFormSchema } from '@/models/formSchemas/connectFormSchema';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export default async function sendConnectForm(
  values: z.infer<typeof connectFormSchema>
) {
  const { name, email, message } = values;

  const transporter = nodemailer.createTransport({
    host: 'smtp.hostinger.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.CONNECT_EMAIL_ADDRESS,
      pass: process.env.CONNECT_EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"GospelTrend London Connect" <${process.env.CONNECT_EMAIL_ADDRESS}>`,
    to: process.env.CONNECT_EMAIL_ADDRESS,
    subject: `New Message from ${name} <${email}>`,
    text: message,
    html: `<p>${message}</p>`,
    replyTo: email,
  });

  console.log('Message sent: %s', info.messageId);
}
