import { Button } from '@/components/ui/button';
import Image from 'next/image';

const SAMPLE_UPDATES = [
  {
    id: '1',
    title: 'Sample Update 1',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias ea delectus id. Vel at eos alias sit atque? Neque, quam nihil, velit ut illo inventore tempore harum saepe incidunt, earum similique facere. Similique sapiente molestias sit consequatur, sunt velit, tempore laudantium doloremque deserunt at laborum distinctio officiis harum error voluptas nam iure cupiditate. Laudantium eius autem commodi, saepe provident iure consectetur ipsam corporis pariatur, vero animi, inventore libero assumenda sed accusantium nostrum id ipsum doloremque modi quam iusto! Dolore tenetur deserunt reprehenderit? Nobis veniam eos aliquid velit voluptatibus assumenda ad tempora voluptates, dignissimos at minus quis. Sapiente, aliquid quo!',
    image: 'https://picsum.photos/seed/update-1/300/300',
  },
  {
    id: '2',
    title: 'Sample Update 2',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias ea delectus id. Vel at eos alias sit atque? Neque, quam nihil, velit ut illo inventore tempore harum saepe incidunt, earum similique facere. Similique sapiente molestias sit consequatur, sunt velit, tempore laudantium doloremque deserunt at laborum distinctio officiis harum error voluptas nam iure cupiditate. Laudantium eius autem commodi, saepe provident iure consectetur ipsam corporis pariatur, vero animi, inventore libero assumenda sed accusantium nostrum id ipsum doloremque modi quam iusto! Dolore tenetur deserunt reprehenderit? Nobis veniam eos aliquid velit voluptatibus assumenda ad tempora voluptates, dignissimos at minus quis. Sapiente, aliquid quo!',
    image: 'https://picsum.photos/seed/update-2/300/300',
  },
  {
    id: '3',
    title: 'Sample Update 3',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias ea delectus id. Vel at eos alias sit atque? Neque, quam nihil, velit ut illo inventore tempore harum saepe incidunt, earum similique facere. Similique sapiente molestias sit consequatur, sunt velit, tempore laudantium doloremque deserunt at laborum distinctio officiis harum error voluptas nam iure cupiditate. Laudantium eius autem commodi, saepe provident iure consectetur ipsam corporis pariatur, vero animi, inventore libero assumenda sed accusantium nostrum id ipsum doloremque modi quam iusto! Dolore tenetur deserunt reprehenderit? Nobis veniam eos aliquid velit voluptatibus assumenda ad tempora voluptates, dignissimos at minus quis. Sapiente, aliquid quo!',
    image: 'https://picsum.photos/seed/update-3/300/300',
  },
  {
    id: '4',
    title: 'Sample Update 4',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias ea delectus id. Vel at eos alias sit atque? Neque, quam nihil, velit ut illo inventore tempore harum saepe incidunt, earum similique facere. Similique sapiente molestias sit consequatur, sunt velit, tempore laudantium doloremque deserunt at laborum distinctio officiis harum error voluptas nam iure cupiditate. Laudantium eius autem commodi, saepe provident iure consectetur ipsam corporis pariatur, vero animi, inventore libero assumenda sed accusantium nostrum id ipsum doloremque modi quam iusto! Dolore tenetur deserunt reprehenderit? Nobis veniam eos aliquid velit voluptatibus assumenda ad tempora voluptates, dignissimos at minus quis. Sapiente, aliquid quo!',
    image: 'https://picsum.photos/seed/update-4/300/300',
  },
  {
    id: '5',
    title: 'Sample Update 5',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias ea delectus id. Vel at eos alias sit atque? Neque, quam nihil, velit ut illo inventore tempore harum saepe incidunt, earum similique facere. Similique sapiente molestias sit consequatur, sunt velit, tempore laudantium doloremque deserunt at laborum distinctio officiis harum error voluptas nam iure cupiditate. Laudantium eius autem commodi, saepe provident iure consectetur ipsam corporis pariatur, vero animi, inventore libero assumenda sed accusantium nostrum id ipsum doloremque modi quam iusto! Dolore tenetur deserunt reprehenderit? Nobis veniam eos aliquid velit voluptatibus assumenda ad tempora voluptates, dignissimos at minus quis. Sapiente, aliquid quo!',
    image: 'https://picsum.photos/seed/update-5/300/300',
  },
  {
    id: '6',
    title: 'Sample Update 6',
    body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus molestias ea delectus id. Vel at eos alias sit atque? Neque, quam nihil, velit ut illo inventore tempore harum saepe incidunt, earum similique facere. Similique sapiente molestias sit consequatur, sunt velit, tempore laudantium doloremque deserunt at laborum distinctio officiis harum error voluptas nam iure cupiditate. Laudantium eius autem commodi, saepe provident iure consectetur ipsam corporis pariatur, vero animi, inventore libero assumenda sed accusantium nostrum id ipsum doloremque modi quam iusto! Dolore tenetur deserunt reprehenderit? Nobis veniam eos aliquid velit voluptatibus assumenda ad tempora voluptates, dignissimos at minus quis. Sapiente, aliquid quo!',
    image: 'https://picsum.photos/seed/update-6/300/300',
  },
];

export default function HomeUpdates() {
  return (
    <section className='bg-gray-50'>
      <div className='container py-12 mx-auto space-y-12'>
        <h2>Updates</h2>
        <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
          {SAMPLE_UPDATES.map(({ id, title, body, image }) => (
            <li key={id}>
              <div className='bg-white border border-gray-50 rounded-lg overflow-hidden shadow-lg'>
                <Image
                  src={image}
                  width={300}
                  height={300}
                  alt={title}
                  className='aspect-video w-full object-cover object-center'
                />
                <div className='p-6 space-y-4'>
                  <h4 className='line-clamp-1'>{title}</h4>
                  <p className='line-clamp-6'>{body}</p>
                  <Button variant='black' className='w-full'>
                    Read more
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className='flex flex-col md:flex-row gap-8 items-start'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut
            ratione dolor veniam atque, dolorum a rem. Nisi obcaecati quisquam
            nihil ipsum voluptatum facere reprehenderit illo recusandae, odit
            culpa? Id molestiae officiis placeat, numquam atque iusto doloribus
            officia inventore laborum, nihil, blanditiis deserunt hic porro
            laboriosam cupiditate saepe ducimus tenetur!
          </p>
          <Button variant='outlineBlack' className='w-full md:w-auto'>
            View all news
          </Button>
        </div>
      </div>
    </section>
  );
}
