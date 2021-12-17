import Link from "../../components/Link";
import useTranslation from "next-translate/useTranslation";

export default function Menu() {
    let { t } = useTranslation();

    return (
        <>
            <ul className="menu">
                <li className="menu__item">
                    <Link href='/'>
                        <a className="menu__link">{t('common:menu.home')}</a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href='/about'>
                        <a className="menu__link">{t('common:menu.about')}</a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href='/ministry'>
                        <a className="menu__link">{t('common:menu.ministry')}</a>
                    </Link>
                </li>
                <li className="menu__item">
                    <Link href='/contact'>
                        <a className="menu__link">{t('common:menu.contact')}</a>
                    </Link>
                </li>
            </ul>
        </>
    )
}