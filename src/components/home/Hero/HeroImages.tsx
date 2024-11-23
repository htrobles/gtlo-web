export default function HeroImages() {
  return (
    <div className='flex-1 flex justify-end items-center gap-2 lg:order-2 w-full'>
      <div className='flex gap-2 flex-col w-full'>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-1-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-1-landscape.jpg' />
          <img
            src='/hero-images/hero-image-1-portrait.jpg'
            alt='Kids playing'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-2-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-2-landscape.jpg' />
          <img
            src='/hero-images/hero-image-2-portrait.jpg'
            alt='Women praying'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
      </div>
      <div className='flex gap-2 flex-col w-full'>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-3-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-3-landscape.jpg' />
          <img
            src='/hero-images/hero-image-3-portrait.jpg'
            alt='Worship leader singing'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-4-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-4-landscape.jpg' />
          <img
            src='/hero-images/hero-image-4-portrait.jpg'
            alt='Cross in the sunset'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-5-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-5-landscape.jpg' />
          <img
            src='/hero-images/hero-image-5-portrait.jpg'
            alt='Pastor preaching'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
      </div>
      <div className='flex gap-2 flex-col w-full'>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-6-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-6-landscape.jpg' />
          <img
            src='/hero-images/hero-image-6-portrait.jpg'
            alt='Kids playing'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
        <picture>
          <source
            media='(min-width: 1024px)'
            srcSet='/hero-images/hero-image-7-portrait.jpg'
          />
          <source srcSet='/hero-images/hero-image-7-landscape.jpg' />
          <img
            src='/hero-images/hero-image-7-portrait.jpg'
            alt='Women praying'
            className='rounded-lg aspect-[4/3] lg:aspect-[3/4] w-full'
          />
        </picture>
      </div>
    </div>
  );
}
