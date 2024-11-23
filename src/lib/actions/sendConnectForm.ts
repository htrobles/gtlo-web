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
    secure: true, // true for port 465, false for other ports
    auth: {
      user: 'connect@gospeltrendlondon.org',
      pass: '4Tq?JbT$&zz@',
    },
  });

  const info = await transporter.sendMail({
    from: '"GospelTrend London Connect" <connect@gospeltrendlondon.org>', // sender address
    to: 'connect@gospeltrendlondon.org', // list of receivers
    subject: `New Message from ${name} <${email}>`, // Subject line
    text: message, // plain text body
    html: `<p>${message}</p>`, // html body
    replyTo: email,
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}
