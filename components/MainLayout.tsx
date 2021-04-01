import Link from 'next/link';
import Head from "next/head";
import { Header } from "./Header";

export function MainLayout({children, title = "Next app"}) {
    return(
        <>
            <Head>
                <title>{title} | Next </title>
                <meta name="keywords" content="church, zp"/>
                <meta name="description" content="church"/>
                <meta charSet="utf-8"/>
            </Head>

            <Header />

            <main>
                {children}
            </main>
        </>
    )
}