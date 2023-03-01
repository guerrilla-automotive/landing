import { AppConfig } from '../../utils/app-config';
import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Footer = () => (
  <Background color="bg-gray-100">
    <Section>
      <div className="text-center">
        <span>{AppConfig.site_name}</span>
        <br />
        <span>Copyright &copy; {AppConfig.legalName}</span>
      </div>
    </Section>
  </Background>
);

export { Footer };
