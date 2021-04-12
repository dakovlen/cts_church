import styles from '../styles/style.scss';
import NextNprogress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NextNprogress
            color="#0f8660"
            startPosition={0.3}
            stopDelayMs={200}
            height="5"
        />
        <Component {...pageProps} />
      </>
      )
}

export default MyApp
