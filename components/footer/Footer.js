import Link from "next/link";
import IconContainer from "./IconContainer";

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
                            <a href="#" className="social__link">
                                <svg className="social__icon">
                                    <use xlinkHref="#icon-fb" className="social__icon"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="#" className="social__link">
                                <svg className="social__icon">
                                    <use xlinkHref="#icon-instagram" className="social__icon"></use>
                                </svg>
                            </a>
                        </li>
                        {/*<li className="social__item">*/}
                        {/*    <a href="#" className="social__link">*/}
                        {/*        <svg className="social__icon">*/}
                        {/*            <use xlinkHref="#icon-email" className="social__icon"></use>*/}
                        {/*        </svg>*/}
                        {/*    </a>*/}
                        {/*</li>*/}

                        <li className="social__item">
                            <a href="#" className="social__link">
                                <svg className="social__icon">
                                    <use xlinkHref="#icon-youtube" className="social__icon"></use>
                                </svg>
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="tel:+380989890090" className="social__link">
                                <svg className="social__icon">
                                    <use xlinkHref="#icon-tel" className="social__icon"></use>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </footer>
            <IconContainer/>
        </>
    )
}