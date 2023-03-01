import Image from 'next/image';
import Link from 'next/link';

import { Section } from '../layouts/section';

const Navbar = () => (
  <Section yPadding="py-4">
    <div className="flex flex-wrap justify-between items-center">
      <div className="font-semibold text-3xl flex gap-4 items-center">
        <Image
          className="rounded-md"
          src="/assets/images/guerrilla-min.jpg"
          alt="Guerrilla Automative"
          height="60"
          width="60"
        />
        <Link href="/">Guerrilla Automotive</Link>
      </div>

      <nav>
        <ul className="navbar flex gap-4 items-center font-medium text-xl"></ul>
      </nav>

      <style jsx>
        {`
          .navbar :global(li:not(:first-child)) {
            @apply mt-0;
          }

          .navbar :global(li:not(:last-child)) {
            @apply mr-5;
          }
        `}
      </style>
    </div>
  </Section>
);

export { Navbar };
