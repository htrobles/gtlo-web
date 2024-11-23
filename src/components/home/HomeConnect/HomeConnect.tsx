'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import sendConnectForm from '@/lib/actions/sendConnectForm';
import { connectFormSchema } from '@/models/formSchemas/connectFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

export default function HomeConnect() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof connectFormSchema>>({
    resolver: zodResolver(connectFormSchema),
    defaultValues: {
      email: '',
      name: '',
      message: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof connectFormSchema>) => {
    const res = await sendConnectForm(values);
    if (res.error) {
      console.log(res.error);
      toast({
        variant: 'destructive',
        title: 'Sorry. Something went wrong.',
        description: 'There was a problem with your request.',
        action: <ToastAction altText='Try again'>Try again</ToastAction>,
      });
    } else {
      toast({
        variant: 'default',
        title: 'Thank you for reaching out to us!',
        description:
          'Our Connect Team will contact you as soon as they read your message.',
        action: <ToastAction altText='Confirm'>Confirm</ToastAction>,
      });

      form.reset();
    }
  };

  return (
    <section id='connect' className='container mx-auto py-12 space-y-12'>
      <h2>Connect with Us</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter your email address' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder='Enter your message'
                      {...field}
                      rows={8}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' variant='black' className='w-full'>
              Submit
            </Button>
          </form>
        </Form>
        <div className='space-y-4'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.4802778963717!2d-81.21649682270161!3d42.96815559646576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882e9311f4d69b83%3A0x90c3e2576ae44111!2sGospelTrend%20London!5e0!3m2!1sen!2sca!4v1732151420060!5m2!1sen!2sca'
            // width={600}
            // height={450}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='w-full aspect-[7/4] rounded-lg'
          />
          <div className='space-y-4'>
            <div className='flex gap-x-4'>
              <MapPin />
              <div>363 Westlake St, London, ON N5Z 3A5</div>
            </div>
            <div className='flex gap-x-4'>
              <Phone />
              <div>(416) 797-3685</div>
            </div>
            <div className='flex gap-x-4'>
              <Mail />
              <div>gospeltrendlondon@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
