'use server';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import { emailConnectFormSchema } from '@/models/formSchemas/connectFormSchema';

export default async function sendConnectEmail(
  values: z.infer<typeof emailConnectFormSchema>
) {
  try {
    const { email } = values;

    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.CONNECT_EMAIL_ADDRESS,
        pass: process.env.CONNECT_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"GospelTrend London Connect" <${process.env.CONNECT_EMAIL_ADDRESS}>`,
      to: process.env.CONNECT_EMAIL_ADDRESS,
      subject: `New Connect request from <${email}>`,
      text: `Someone with email address: ${email} has requested to connect with us.`,
      html: `<p>Someone with email address: ${email} has requested to connect with us.</p>`,
      replyTo: email,
    });

    return { success: true };
  } catch (error) {
    return { error: error };
  }
}
