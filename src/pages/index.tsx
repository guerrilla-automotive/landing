import { useEffect, useState } from 'react';

import { Transition } from '@headlessui/react';
import Image from 'next/image';

import { Base } from '../ui/base';
import { Hero } from '../ui/features/hero';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Base>
        <Hero />
      </Base>

      <Transition
        show={isLoading}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="absolute left-0 top-0 w-full h-full overflow-hidden bg-neutral-900 flex flex-col gap-4 items-center justify-center"
      >
        <Image
          className="rounded-md"
          src="/assets/images/guerrilla-min.jpg"
          alt="Guerrilla Automative"
          height="200"
          width="200"
        />
        <span className="text-2xl text-neutral-100 font-semibold">
          Guerrilla Automotive
        </span>
      </Transition>
    </>
  );
};

export default Index;
