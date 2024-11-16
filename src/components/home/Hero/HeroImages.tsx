import Image from 'next/image';

export default function HeroImages() {
  return (
    <div className='flex-1 flex justify-end items-center gap-2 lg:order-2'>
      <div className='flex gap-2 flex-col'>
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-1.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-2.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
      </div>
      <div className='flex gap-2 flex-col'>
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-3.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-4.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-5.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
      </div>
      <div className='flex gap-2 flex-col'>
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-6.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
        <Image
          className='aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center'
          src='/hero-images/hero-image-7.png'
          width={168}
          height={214}
          alt='Picture of the author'
        />
      </div>
    </div>
  );
}