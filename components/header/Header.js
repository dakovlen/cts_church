import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    let router = useRouter();


    return(
        <>
            <header className="header">
                <nav className="header-content">
                    <Link  href="/">
                        <a className="logo">
                            <img src="/images/logo_horizontal_color_white.png" alt="Logo"/>
                        </a>
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
                        {router.locales.map((locale) => (
                            <div className="lang__item"
                                 key={locale}>
                                <Link href={router.asPath}
                                      locale={locale}>
                                    <a className="lang__link">{locale}</a>
                                </Link>
                            </div>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    )
}