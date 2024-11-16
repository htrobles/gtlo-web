'use client';

interface HomeEventItemProps {
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
];

export default function HomeEventsList() {
  return (
    <div className='space-y-4'>
      <ul className='space-y-2'>
        {SAMPLE_EVENTS.map((event) => (
          <HomeEventItems key={event.id} event={event} />
        ))}
      </ul>
      <button className='border border-white py-4 px-8 text-white rounded-lg hover:bg-white hover:text-black transition-colors'>
        View all upcoming events
      </button>
    </div>
  );
}

function HomeEventItems({ event }: { event: HomeEventItemProps }) {
  const { title, description, id } = event;

  const handleClickEvent = () => {
    console.log(id);
  };

  return (
    <li>
      <div
        className='rounder-lg bg-white flex rounded-lg overflow-clip'
        onClick={handleClickEvent}
      >
        <div className='flex flex-col justify-center items-center text-white bg-gradient-to-b from-primary-400 to-primary-800 aspect-square grow h-full p-6'>
          <div className='text-6xl font-black'>28</div>
          <div className='text-4xl font-bold'>JUL</div>
        </div>
        <div className='p-4'>
          <h4 className='mb-3'>{title}</h4>
          <p className='line-clamp-2'>{description}</p>
        </div>
      </div>
    </li>
  );
}
