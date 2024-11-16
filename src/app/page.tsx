import Hero from '@/components/home/Hero/Hero';
import HomeMinistries from '@/components/home/Hero/HomeMinistries';
import HomeEvents from '@/components/home/HomeEvents/HomeEvents';
import HomeUpdates from '@/components/home/HomeUpdates/HomeUpdates';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeEvents />
      <HomeMinistries />
      <HomeUpdates />
      <div>Contact</div>
      <footer>Footer</footer>
    </>
  );
}
