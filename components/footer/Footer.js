import Link from "next/link";
import IconContainer from "./IconContainer";
import Menu from "../../components/header/Menu";
import Map from "../../components/Map";

export default function Footer() {
    return(
        <>
            <Map/>

            <footer className="footer">
                <nav className="footer-content">
                    <Link  href="/">
                        <a className="logo">
                            <img src="/images/logo_horizontal_white.png" alt="Logo Bottom"/>
                        </a>
                    </Link>

                    <Menu/>

                    <ul className="social">
                        <li className="social__item">
                            <a href="https://www.facebook.com/church.cts"
                               className="social__link"
                                target="_blank"
                            >
                                <svg className="social__icon">
                                    <use xlinkHref="#icon-fb" className="social__icon"></use>
                                </svg>
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://www.instagram.com/cts_church/"
                               className="social__link"
                               target="_blank"
                            >
                                <svg className="social__icon">
                                    <use xlinkHref="#icon-instagram" className="social__icon"></use>
                                </svg>
                            </a>
                        </li>

                        <li className="social__item">
                            <a href="https://www.youtube.com/channel/UCsdwUf3UHm17hR2qtwzQOrg"
                               className="social__link"
                               target="_blank"
                            >
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