import '@/styles/globals.scss';
import { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    (async () => {
      const { server } = await import('@/mocks/server');
      server.listen();
    })();
  } else {
    (async () => {
      const { worker } = await import('@/mocks/browser');
      worker.start();
    })();
  }
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
