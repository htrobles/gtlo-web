import Image from 'next/image';

export default function HeroImages() {
  return (
    <div className="flex-1 flex justify-end items-center gap-2 lg:order-2 w-full">
      <div className="flex gap-2 flex-col w-full">
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-1.jpeg"
          width={2048}
          height={1536}
          alt="Hero Image"
        />
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-2.jpeg"
          width={2048}
          height={1536}
          alt="Hero Image"
        />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-3.jpeg"
          width={1536}
          height={1152}
          alt="Hero Image"
        />
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-4.jpg"
          width={2000}
          height={3000}
          alt="Hero Image"
        />
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-5.jpeg"
          width={168}
          height={214}
          alt="Hero Image"
        />
      </div>
      <div className="flex gap-2 flex-col w-full">
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-6.jpeg"
          width={2048}
          height={946}
          alt="Hero Image"
        />
        <Image
          className="aspect-[4/3] lg:aspect-[3/4] object-cover rounded-lg object-center w-full"
          src="/hero-images/hero-image-7.jpeg"
          width={2048}
          height={1536}
          alt="Hero Image"
        />
      </div>
    </div>
  );
}
