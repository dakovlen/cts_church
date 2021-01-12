import Link from 'next/link';
import Head from 'next/head';

export default function Index() {
    return (
        <>
            <Head>
                <title>Learning title</title>
            </Head>
            <h1>Hello js</h1>
            <p><Link href={'/about'}>About</Link></p>
            <p><Link href="/posts">Posts</Link></p>
        </>
    )
}