import '@/styles/globals.scss';
import { SharedOptions } from 'msw';
import { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  const options: SharedOptions = {
    onUnhandledRequest: 'bypass'
  };
  if (typeof window === 'undefined') {
    (async () => {
      const { server } = await import('@/mocks/server');
      server.listen(options);
    })();
  } else {
    (async () => {
      const { worker } = await import('@/mocks/browser');
      worker.start(options);
    })();
  }
}

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}
