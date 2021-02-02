import Link from 'next/link';
import Head from 'next/head';
import {MainLayout} from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Learning title</title>
                <meta name="keywords" content="Мета слова"></meta>
                <meta name="description" content="Мета описание"></meta>
            </Head>
            <h1>Hello js</h1>
            <p><Link href={'/about'}>About</Link></p>
            <p><Link href="/posts">Posts</Link></p>
        </MainLayout>
    )
}