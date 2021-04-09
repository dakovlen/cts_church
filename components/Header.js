import Link from "next/link";

export default function Header() {
    return(
        <>
            <header className="header">
                <nav className="header-content">
                    <Link  href="./">
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

                    <div className="lang">
                        <div className="lang__item">Ru</div>
                        <div className="lang__item">UA</div>
                        <div className="lang__item">En</div>
                    </div>
                </nav>
            </header>
        </>
    )
}