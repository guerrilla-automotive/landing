import { Background } from '../layouts/background';
import { Section } from '../layouts/section';

const Hero = () => (
  <Background color="bg-neutral-800">
    <Section
      title="Bringing the repair shop to you"
      yPadding="pt-8 pb-12 md:pt-20 md:pb-32"
      className="text-neutral-100"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-lg">
          <p>
            Our mobile automotive repair service provides convenient, reliable,
            and professional vehicle repairs and maintenance services directly
            to our customers&apos; location.
          </p>
          <br />
          <p>
            Our experienced and certified technicians use the latest tools and
            equipment to diagnose and repair a wide range of automotive issues,
            from simple maintenance tasks to complex engine repairs. With our
            flexible scheduling, competitive pricing, and exceptional customer
            service, we strive to make your automotive repair experience as
            hassle-free as possible.
          </p>
          <br />
          <p>
            Trust us to keep your vehicle running smoothly and safely, without
            the inconvenience of having to take it to a repair shop.
          </p>
          <br />
          <div className="flex gap-1 text-xl text-[#dc0024] font-bold">
            <span>Need help?</span>
            <button>Give us a call: 737-747-2233</button>
          </div>
        </div>
        <img
          src="/assets/images/hero-mechanic.jpg"
          alt="Mobile Mechanic"
          width="100%"
          height="100%"
          className="rounded"
        />
      </div>
    </Section>
  </Background>
);

export { Hero };
