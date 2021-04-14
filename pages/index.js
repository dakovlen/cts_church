import '../styles/Home.module.css';
import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Home() {
    let { t } = useTranslation();
  return (
    <MainLayout title={'Home Page'}>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide><img src="/images/slider.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="/images/slider2.jpg" alt=""/></SwiperSlide>
            <SwiperSlide><img src="/images/slider.jpg" alt=""/></SwiperSlide>
        </Swiper>
      {/*<div className="container">*/}
      {/*    <h1>{t('common:greeting')}</h1>*/}
      {/*</div>*/}
    </MainLayout>
  )
}
