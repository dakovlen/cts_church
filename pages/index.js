import '../styles/Home.module.css';
import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

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
      <div className="container">
          <motion.div initial="hidden" animate="visible" variants={{
              hidden: {
                  scale: 0.8,
                  opacity: 0
              },
              visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                      delay: .4
                  }
              }
          }}>
              <h1>{t('common:greeting')}</h1>
          </motion.div>
      </div>
    </MainLayout>
  )
}
