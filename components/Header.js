import Link from "next/link";

export function Header() {
    return(
        <>
            <header className="header">
                <nav className="container header-content">
                    <Link href={'/'}>
                        <a className="logo">
                            <img src="../images/logo_horizontal_color_white.png" alt=""/></a></Link>
                    <ul className="menu">
                        <li><Link href={'/about'}><a>О нас</a></Link></li>
                        <li><Link href={'/'}><a>Служения</a></Link></li>
                        <li><Link href={'/'}><a>События</a></Link></li>
                        <li><Link href={'/'}><a>Контакты</a></Link></li>
                    </ul>

                    <div className="lang">
                        <span>RU</span>
                        <span>UKR</span>
                        <span>EN</span>
                    </div>
                </nav>
            </header>
        </>
    )
}