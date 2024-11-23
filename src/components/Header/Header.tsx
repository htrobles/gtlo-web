import Image from 'next/image';
import { Button } from '@/components/ui/button';
import gtloLogo from '/public/gtlo-logo-horizontal.png';

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
    <header className="bg-white sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center py-4">
        <Image
          src={gtloLogo}
          alt="GospelTrend London Logo"
          className="max-h-[50px] max-w-[200px] w-fit object-contain grow-0 shrink-0"
        />
        <div className="flex gap-6">
          <ul className="hidden lg:flex gap-6 items-center">
            {links.map(({ key, href, label }) => (
              <li key={key}>
                <a
                  href={href}
                  className="py-2 px-4 hover:bg-foreground hover:text-white rounded-sm transition-colors "
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#connect">
            <Button>Connect</Button>
          </a>
        </div>
      </div>
    </header>
  );
}
