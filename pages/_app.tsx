import '../styles/style.scss';
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
    return(
        <>
            <NextNprogress
                color="#0f8660"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Component {...pageProps} />
        </>
    )
}