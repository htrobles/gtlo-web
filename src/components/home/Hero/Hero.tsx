'use client';

import HeroImages from './HeroImages';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import sendConnectEmail from '@/lib/actions/sendConnectEmail';
import { emailConnectFormSchema } from '@/models/formSchemas/connectFormSchema';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@/components/ui/toast';

export default function Hero() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof emailConnectFormSchema>>({
    resolver: zodResolver(emailConnectFormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof emailConnectFormSchema>) => {
    const res = await sendConnectEmail(values);
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
    <section
      id='hero'
      className='container mx-auto flex flex-col lg:flex-row gap-x-12 gap-y-8 items-center py-12 lg:pt-24 xl:pt-12'
    >
      <HeroImages />
      <div className='flex-1 space-y-6 lg:order-1 relative'>
        <div className='hidden lg:block absolute -top-4'>
          <div className='w-24 h-2 bg-foreground relative'></div>
          <div className='h-48 w-2 bg-foreground relative left-1/2 -top-12'></div>
        </div>
        <h1 className='text-5xl sm:hidden lg:block lg:text-6xl relative lg:left-20'>
          YOUR FAMILY
          <br />
          AWAY FROM HOME
        </h1>
        <div className='space-y-4'>
          <h1 className='hidden sm:block lg:hidden text-center text-5xl md:text-6xl'>
            YOUR FAMILY AWAY FROM HOME
          </h1>
          <p>
            Welcome to Gospel Trend Church, where our mission is simple:
            &quot;Win souls and make disciples.&quot; Located in the heart of
            London, we are a vibrant community of believers dedicated to living
            out the love of Christ in practical, meaningful ways. At Gospel
            Trend Church, we believe in the power of God&apos;s love to
            transform lives, and we are passionate about sharing that love with
            others.
          </p>
          <p>
            Our core values are rooted in two guiding principles: Loving God and
            Loving People. This means that everything we do—from worship to
            outreach—is centered on building a deeper relationship with God and
            extending His love to everyone around us. Whether you&apos;re new to
            faith or seeking a community to grow spiritually, Gospel Trend
            Church is a place where you&apos;ll find encouragement, support, and
            a family in Christ.
          </p>
          <p>
            Join us as we strive to make a difference in our city, one soul at a
            time.
          </p>
        </div>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex'>
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='max-w-96 w-full'>
                    <FormControl>
                      <Input
                        placeholder='Email Address'
                        {...field}
                        className='rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-gray-50 h-11'
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type='submit' className='rounded-l-none'>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
