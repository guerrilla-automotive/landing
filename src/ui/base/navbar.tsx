import Link from 'next/link';

import { Section } from '../layouts/section';

const Navbar = () => (
  <Section yPadding="py-8">
    <div className="flex flex-wrap justify-between items-center">
      <div className="font-semibold text-xl">
        <Link href="/">Guerrilla Automotive</Link>
      </div>

      <nav>
        <ul className="navbar flex gap-4 items-center font-medium text-xl text-gray-800">
          <li>
            <Link href="/">Link 1</Link>
          </li>
          <li>
            <Link href="/">Link 2</Link>
          </li>
        </ul>
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
