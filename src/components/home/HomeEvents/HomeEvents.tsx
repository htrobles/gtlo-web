import HomeEventDetails from './HomeEventDetails';
import HomeEventsList from './HomeEventsList';

export default function HomeEvents() {
  return (
    <section className='bg-gradient-to-b from-gray-950 to-black py-12'>
      <div className='container mx-auto px-4 py-12'>
        <h2 className='text-white'>Events</h2>
        <div className='grid grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 gap-8'>
          <div className='col-span-2'>
            <HomeEventsList />
          </div>
          <div className='col-span-2 xl:col-span-3'>
            <HomeEventDetails />
          </div>
        </div>
      </div>
    </section>
  );
}
