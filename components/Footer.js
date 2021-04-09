import Link from "next/link";

export default function Footer() {
    return(
        <>
            <footer className="footer">
                <nav className="footer-content">
                    <Link  href="/">
                        <a className="logo">logo</a>
                    </Link>
                    <ul className="menu">
                        <li className="menu__item">
                            <Link href='/about'>
                                <a className="menu__link">About</a>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link href='/contact'>
                                <a className="menu__link">Contact</a>
                            </Link>
                        </li>
                    </ul>

                    <ul className="social">
                        <li className="social__item">
                            <a href="#" className="social__link">inst</a>
                        </li>
                        <li className="social__item">
                            <a href="#" className="social__link">fb</a>
                        </li>
                        <li className="social__item">
                            <a href="#" className="social__link">YouTube</a>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}