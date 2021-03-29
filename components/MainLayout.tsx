import Link from 'next/link';
import Head from "next/head";

export function MainLayout({children, title = "Next app"}) {
    return(
        <>
            <Head>
                <title>{title} | Next </title>
                <meta name="keywords" content="church, zp"/>
                <meta name="description" content="church"/>
                <meta name charSet="utf-8"/>
            </Head>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/posts'}>Posts</Link>
            </nav>

            <main>
                {children}
            </main>

            <style jsx>
                {`
                    nav {
                        position: fixed;
                        height: 60px;
                        top: 0;
                        left: 0;
                        right: 0;
                        background: lightblue;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                    } 
                    
                    nav a {
                        color: #ffffff;
                        text-decoration: none;
                    }   
                    
                    main {
                        margin-top: 60px;
                        padding: 1rem; 
                    }
                `}
            </style>
        </>
    )
}