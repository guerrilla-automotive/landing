import { AppConfig } from '../../utils/app-config';
import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Footer = () => (
  <Background color="bg-neutral-900">
    <Section className="text-neutral-100">
      <div className="w-full flex justify-between">
        <div className="flex flex-col">
          <span>{AppConfig.legalName} &copy; 2023</span>
          <span>Phone: 737-747-2233</span>
        </div>
        <div className="flex flex-col">
          <span>1999 Bryan St, STE 900</span>
          <span>Dallas, TX 75201</span>
        </div>
      </div>
    </Section>
  </Background>
);

export { Footer };
