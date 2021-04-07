import Head from 'next/head';
import Link from 'next/link';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <h1>Hello!</h1>
        <ul>
            <li>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </li>
            <li>
                <Link href='/contact'>
                    <a>Contact</a>
                </Link>
            </li>
        </ul>
    </>
  )
}
