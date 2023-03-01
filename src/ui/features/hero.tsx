import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Hero = () => (
  <Background color="bg-gray-200" fullscreen>
    <Section
      title="Guerrilla Automotive"
      description="Bringing the repair shop to you"
      yPadding="pt-20 pb-32"
    >
      <div>Content</div>
    </Section>
  </Background>
);

export { Hero };
