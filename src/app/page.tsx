import Hero from '@/components/home/Hero/Hero';
import HomeMinistries from '@/components/home/Hero/HomeMinistries';
import HomeEvents from '@/components/home/HomeEvents/HomeEvents';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeEvents />
      <HomeMinistries />
      <div>Updates</div>
      <div>Contact</div>
      <footer>Footer</footer>
    </>
  );
}
