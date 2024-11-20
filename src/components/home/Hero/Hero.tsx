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

const formSchema = z.object({
  email: z.string().email().min(5),
});

export default function Hero() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div className='container mx-auto flex flex-col lg:flex-row gap-x-12 gap-y-8 items-center py-12'>
      <HeroImages />
      <div className='flex-1 space-y-4 lg:order-1'>
        <h1 className='text-4xl sm:hidden lg:block lg:text-6xl'>
          YOUR FAMILY
          <br />
          AWAY FROM HOME
        </h1>
        <h1 className='hidden sm:block lg:hidden text-center text-5xl md:text-6xl'>
          YOUR FAMILY AWAY FROM HOME
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          suscipit libero excepturi ratione doloremque exercitationem officia,
          ipsum enim eum aliquam quibusdam assumenda doloribus tempore facere
          aperiam, veniam dicta! Tenetur maxime, consequuntur dicta facere
          deleniti reiciendis, sunt corporis ad cum cumque ullam saepe, dolores
          ut quam numquam earum ipsam libero velit.
        </p>
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
                        className='rounded-r-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:bg-gray-50'
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
    </div>
  );
}
