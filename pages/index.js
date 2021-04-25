import MainLayout from "../components/MainLayout";
import useTranslation from "next-translate/useTranslation";
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
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
              <section className="section">
                  <h1>{t('common:greeting')}</h1>
              </section>
          </motion.div>
      </div>
    </MainLayout>
  )
}
