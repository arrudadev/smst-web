import type { AppProps } from 'next/app';

import { ModalContextProvider } from '../contexts/ModalContext';

import '../styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ModalContextProvider>
      <Component {...pageProps} />
    </ModalContextProvider>
  );
};

export default MyApp;
