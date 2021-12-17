import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from "next/link";
import { motion } from "framer-motion";

SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Home() {
    let { t } = useTranslation();
  return (
    <MainLayout title={'Home Page'}>
        <Swiper
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            className="slider-section"
        >
            <SwiperSlide>
                <div className="slider-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <img src="/images/slider.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slider-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <img src="/images/slider2.jpg" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slider-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
                <img src="/images/slider.jpg" alt=""/>
            </SwiperSlide>
        </Swiper>
        <section className="about-home-section section">
            <div className="container">
                <h2 className="about-home__title title-section">O Нас</h2>

                <div className="about-home">
                    <div className="about-home__item about-home__img">
                        <img src="/images/about.jpg" alt="About"/>
                    </div>
                    <div className="about-home__item about-home__text">
                        <p className="about-home__p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cupiditate eum nobis quod sunt vitae. Ipsa laborum nobis suscipit. Assumenda, dolore doloremque earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cupiditate eum nobis quod sunt vitae. Ipsa laborum nobis suscipit. Assumenda, dolore doloremque earumLorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid cupiditate eum nobis quod sunt vitae. Ipsa laborum nobis suscipit. Assumenda, dolore doloremque earum eveniet modi quos reiciendis veritatis? Architecto, consequuntur dignissimos ducimus eaque eligendi impedit ipsam molestiae saepe soluta.</p>
                        <Link  href="/about"><a className="btn btn-main">подробнее</a></Link>
                    </div>
                </div>
            </div>
        </section>

        <section className="section ministry-section">
            <h2>Служения</h2>
            <div className="ministry-home-box">
                <div className="ministry-home">
                    <img className="ministry-home__bg"  src="./images/about.jpg" alt="Bg"/>
                    <h3 className="ministry-home__title">Малые группы</h3>
                    <p className="ministry-home__desc">малые группы описание малые группы описаниемалые группы описаниемалые группы описаниемалые группы описание</p>
                    <Link href="/ministry"><a className="btn btn-main">подробнее</a></Link>
                </div>

                <div className="ministry-home">
                    <img className="ministry-home__bg"  src="./images/about.jpg" alt="Bg"/>
                    <h3 className="ministry-home__title">Малые группы</h3>
                    <p className="ministry-home__desc">малые группы описание малые группы описаниемалые группы описаниемалые группы описаниемалые группы описание</p>
                    <Link href="/ministry"><a className="btn btn-main">подробнее</a></Link>
                </div>

                <div className="ministry-home">
                    <img className="ministry-home__bg"  src="./images/about.jpg" alt="Bg"/>
                    <h3 className="ministry-home__title">Малые группы</h3>
                    <p className="ministry-home__desc">малые группы описание малые группы описаниемалые группы описаниемалые группы описаниемалые группы описание</p>
                    <Link href="/ministry"><a className="btn btn-main">подробнее</a></Link>
                </div>

                <div className="ministry-home">
                    <img className="ministry-home__bg"  src="./images/about.jpg" alt="Bg"/>
                    <h3 className="ministry-home__title">Малые группы</h3>
                    <p className="ministry-home__desc">малые группы описание малые группы описаниемалые группы описаниемалые группы описаниемалые группы описание</p>
                    <Link href="/ministry"><a className="btn btn-main">подробнее</a></Link>
                </div>
            </div>
        </section>

        <section className="section section-video">
            <div className="container">
                <h2>Трансляции</h2>
                <iframe width="100%" height="515" src="https://www.youtube.com/embed/ka4wErxS_Yc"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
            </div>
        </section>
        {/*<iframe*/}
        {/*    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fchurch.cts&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=795374611268110"*/}
        {/*    width="100%" height="500" scrolling="no" frameBorder="0"*/}
        {/*    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>*/}
    </MainLayout>
  )
}
