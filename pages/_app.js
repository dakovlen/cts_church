import styles from '../styles/style.scss';
import NextNprogress from 'nextjs-progressbar';
import { motion } from "framer-motion";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

function MyApp({ Component, pageProps, router }) {
  return (
        <motion.div className="app" key={router.router} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            }
        }}>
            <NextNprogress
                color="#0f8660"
                startPosition={0.3}
                stopDelayMs={200}
                height="5"
            />
            <Component {...pageProps} />
        </motion.div>
      )
}

export default MyApp
