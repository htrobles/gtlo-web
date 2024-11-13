import Hero from '@/components/Hero/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Hero />
      <div>Events</div>
      <div>Ministries</div>
      <div>Updates</div>
      <div>Contact</div>
      <footer>Footer</footer>
    </div>
  );
}
