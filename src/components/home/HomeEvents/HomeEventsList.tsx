'use client';

import { useEffect, useState } from 'react';
import HomeEventItems from './HomeEventItems';
import { Button } from '@/components/ui/button';

export interface HomeEventItemProps {
  id: string;
  title: string;
  description: string;
}

const SAMPLE_EVENTS: HomeEventItemProps[] = [
  {
    id: '1',
    title: 'Sample Event 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem natus ex fuga voluptatum saepe ea maiores illum officiis deleniti?',
  },
  {
    id: '2',
    title: 'Sample Event 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem natus ex fuga voluptatum saepe ea maiores illum officiis deleniti?',
  },
  {
    id: '3',
    title: 'Sample Event 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem natus ex fuga voluptatum saepe ea maiores illum officiis deleniti?',
  },
  {
    id: '4',
    title: 'Sample Event 4',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem natus ex fuga voluptatum saepe ea maiores illum officiis deleniti?',
  },
  {
    id: '5',
    title: 'Sample Event 5',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem natus ex fuga voluptatum saepe ea maiores illum officiis deleniti?',
  },
  {
    id: '6',
    title: 'Sample Event 6',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem quidem natus ex fuga voluptatum saepe ea maiores illum officiis deleniti?',
  },
];

export default function HomeEventsList() {
  const [screenWidth, setScreenWidth] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='space-y-4'>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2'>
        {SAMPLE_EVENTS.map((event) => (
          <HomeEventItems
            key={event.id}
            event={event}
            screenWidth={screenWidth}
          />
        ))}
      </ul>
      <Button variant='ghostOutline' size='lg'>
        View all upcoming events
      </Button>
    </div>
  );
}
