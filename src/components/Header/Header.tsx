import Image from 'next/image';
import { Button } from '@/components/ui/button';

const links = [
  {
    key: 'about-us',
    href: '#hero',
    label: 'About Us',
  },
  // {
  //   key: 'events',
  //   href: '#events',
  //   label: 'Events',
  // },
  // {
  //   key: 'updates',
  //   href: '#updates',
  //   label: 'Updates',
  // },
  {
    key: 'ministries',
    href: '#ministries',
    label: 'Ministries',
  },
];

export default function Header() {
  return (
    <header className='bg-white sticky top-0 z-10'>
      <div className='container mx-auto flex justify-between items-center py-4'>
        <Image
          src='/gospel-trend-logo_london-horizontal 4.svg'
          width={136}
          height={50}
          alt='Picture of the author'
        />
        <div className='flex gap-6'>
          <ul className='hidden lg:flex gap-6 items-center'>
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <a
                  href={href}
                  className='py-2 px-4 hover:bg-foreground hover:text-white rounded-sm transition-colors '
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href='#connect'>
            <Button>Connect with Us</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
