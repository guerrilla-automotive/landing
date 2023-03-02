import { AppConfig } from '../../utils/app-config';
import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Footer = () => (
  <Background color="bg-neutral-900">
    <Section className="text-neutral-100">
      <div className="w-full flex flex-col justify-center md:justify-between md:flex-row gap-4 md:gap-2">
        <div className="flex flex-col text-center md:text-left">
          <span>{AppConfig.legalName} &copy; 2023</span>
          <span>Phone: 737-747-2233</span>
        </div>
        <div className="flex flex-col text-center md:text-right">
          <span>1999 Bryan St, STE 900</span>
          <span>Dallas, TX 75201</span>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
