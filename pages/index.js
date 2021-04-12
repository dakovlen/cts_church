import Head from 'next/head';
import Link from 'next/link';
import '../styles/Home.module.css';
import MainLayout from "../components/MainLayout";

export default function Home() {
  return (
    <MainLayout title={'Home Page'}>
      <div className="container">
          <h1>Hello!</h1>
      </div>
    </MainLayout>
  )
}
