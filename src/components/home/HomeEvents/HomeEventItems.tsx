'use client';

import { HomeEventItemProps } from './HomeEventsList';

export default function HomeEventItems({
  event,
  screenWidth,
}: {
  event: HomeEventItemProps;
  screenWidth: number | undefined;
}) {
  const { title, description, id } = event;

  const handleClickEvent = () => {
    if (screenWidth && screenWidth > 768) {
      console.log('big');
      console.log(id);
    } else {
      console.log('small');
      console.log(id);
    }
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
          <h4 className='mb-3 line-clamp-1'>{title}</h4>
          <p className='line-clamp-2'>{description}</p>
        </div>
      </div>
    </li>
  );
}
