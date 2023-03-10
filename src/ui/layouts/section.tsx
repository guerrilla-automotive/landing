import { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
};

const Section = (props: ISectionProps) => (
  <div
    className={`max-w-screen-xl mx-auto px-3 ${props.className}
      ${props.yPadding ? props.yPadding : 'py-16'}
    `}
  >
    {(props.title || props.description) && (
      <div className="mb-6 md:mb-12 text-center">
        {props.title && (
          <h2 className="text-2xl md:text-4xl font-bold uppercase">
            {props.title}
          </h2>
        )}
        {props.description && (
          <div className="mt-4 text-xl md:px-20">{props.description}</div>
        )}
      </div>
    )}

    {props.children}
  </div>
);

export { Section };
