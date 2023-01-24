import '@/styles/globals.scss';
import { AppProps } from 'next/app';

/**
 * @param {object} props page context
 * @param {object} props.Component topmost component of the page
 * @param {Array} props.pageProps properties for the page
 * @returns {?} page
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
