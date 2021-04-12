import Head from 'next/head';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function MainLayout({ children, title="Base Title" }) {
    return (
        <>
            <Head>
                <title>{title} | Page</title>
            </Head>
            <Header/>

            <main>
                { children }
            </main>

            <Footer/>
        </>
    )
}