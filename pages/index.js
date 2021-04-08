import Head from 'next/head';
import Link from 'next/link';
import '../styles/Home.module.css';
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout>
        <Head>
            <title>Title</title>
        </Head>
      <h1>Hello!</h1>
        <ul>

        </ul>
    </MainLayout>
  )
}
