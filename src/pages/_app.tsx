import { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import '../styles/global.css';

const manrope = Manrope({ subsets: ['latin'] });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={manrope.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
