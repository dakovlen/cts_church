import Head from 'next/head'
import { MainLayout } from '../components/MainLayout'

export default function Posts(){
    return (
        
        <MainLayout>
            <Head>
                <title>Posts</title>
            </Head>
            <h1>Hello Posts</h1>
            <p> lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
        </MainLayout>
    )
}