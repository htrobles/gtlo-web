import Image from 'next/image';

export default function HomeEventDetails() {
  return (
    <div className='space-y-8'>
      <h3 className='text-white'>EVENT TITLE</h3>
      <Image
        src='https://picsum.photos/1920/1080'
        width={1920}
        height={1080}
        alt='Event Image'
        className='rounded-lg'
      />
      <div className='text-white'>
        <p>
          <strong>WHEN:</strong>July 28, 2024
        </p>
        <p>
          <strong>WHERE:</strong>Gibbons Park, London, ON
        </p>
      </div>
      <div className='text-white'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          iste necessitatibus libero nostrum vero quidem, ipsam sapiente
          voluptatibus natus tempore consequatur quisquam dolor impedit,
          eligendi aperiam eius consequuntur maxime, enim iure id ipsum.
          Pariatur amet consectetur repellendus voluptatibus esse, consequuntur
          quaerat vero odio at, quas cupiditate, facere dignissimos sit dolore
          ab iste ratione impedit nesciunt minus labore. Accusamus iure eos
          voluptate quae nemo temporibus, consectetur ut quos nostrum iusto
          officia accusantium impedit esse natus doloribus illum nihil atque,
          placeat officiis! Voluptas, rem. Ipsum, expedita quia quae esse sunt
          explicabo a minus, dolore quisquam minima perferendis veniam. Nulla
          assumenda asperiores ipsam.
        </p>
      </div>
    </div>
  );
}
