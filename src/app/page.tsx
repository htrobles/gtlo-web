import Footer from '@/components/Footer/Footer';
import Hero from '@/components/home/Hero/Hero';
import HomeMinistries from '@/components/home/Hero/HomeMinistries';
import HomeConnect from '@/components/home/HomeConnect/HomeConnect';
// import HomeEvents from '@/components/home/HomeEvents/HomeEvents';
// import HomeUpdates from '@/components/home/HomeUpdates/HomeUpdates';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HomeEvents /> */}
      <HomeMinistries />
      {/* <HomeUpdates /> */}
      <HomeConnect />
      <Footer />
    </>
  );
}
