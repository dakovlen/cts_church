import styles from '../styles/style.scss';
import NextNprogress from 'nextjs-progressbar';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

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
