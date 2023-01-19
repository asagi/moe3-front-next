import '@/styles/globals.scss';
import SvgResources from '@/resources/resources.svg';

/**
 * @param {object} props page context
 * @param {object} props.Component topmost component of the page
 * @param {Array} props.pageProps properties for the page
 * @returns {?} page
 */
export default function App({ Component, pageProps }) {
  return (
    <>
      <SvgResources className='hidden' />
      <Component {...pageProps} />
    </>
  );
}
