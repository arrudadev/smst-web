import type { AppProps } from 'next/app';

import { Header } from '../components/Header';
import { ModalContextProvider } from '../contexts/ModalContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalContextProvider>
      <Header />

      <Component {...pageProps} />
    </ModalContextProvider>
  );
};

export default MyApp;
