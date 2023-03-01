import { ReactNode } from 'react';

import { Footer } from './footer';
import { Meta } from './meta';
import { Navbar } from './navbar';
import { AppConfig } from '../../utils/app-config';

type IBaseProps = {
  children?: ReactNode;
};

const Base = (props: IBaseProps) => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Navbar />
    {props.children}
    <Footer />
  </>
);

export { Base };
