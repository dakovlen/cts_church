import Link from "next/link";
import { useRouter } from "next/router";
import Menu from '../../components/header/Menu';

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

                    <input type="checkbox" className="input-checkbox" id="menu-toggle"/>
                    <label className="menu-icon" htmlFor="menu-toggle"></label>

                    <div className="menu-box">
                        <Menu/>
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
                    </div>

                </nav>
            </header>
        </>
    )
}