import Link from "next/link";

export default function MainLayout({ children }) {
    return (
        <>
            <header>
                <nav className="header-content">
                    <Link  href="./">
                        <a>logo</a>
                    </Link>
                    <ul className="menu">
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

                    <div className="leng">
                        <div className="eng-item">Ru</div>
                        <div className="eng-item">UA</div>
                        <div className="eng-item">En</div>
                    </div>
                </nav>
            </header>

            <main>
                { children }
            </main>

            <footer>
                <nav className="footer-content">
                    <Link  href="./">
                        <a>logo</a>
                    </Link>
                    <ul className="menu">
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

                    <div className="leng">
                        <div className="eng-item">Ru</div>
                        <div className="eng-item">UA</div>
                        <div className="eng-item">En</div>
                    </div>
                </nav>
            </footer>
        </>
    )
}