import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay'
import 'swiper/css/pagination';
import s from './Slider.module.css';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import SLiderIcon from './../../../assets/images/slide.png';

const Slider: FC = () => {
    SwiperCore.use([Autoplay]);

    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay
        >
            <SwiperSlide className={s.slide}>
                <div className={s.slider__left}>
                    <p className={s.slider__subtitle}>Welcome to GreenShop</p>
                    <h1 className={s.slider__title}>Let’s Make a<br />Better <span>Planet</span></h1>
                    <p className={s.slider__text}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button className="button slider__button">SHOP NOW</button>
                </div>
                <div className={s.slider__right}>
                    <img src={SLiderIcon} alt="slider__icon" className={s.slider__icon} />
                </div>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
                <div className={s.slider__left}>
                    <p className={s.slider__subtitle}>Welcome to GreenShop</p>
                    <h1 className={s.slider__title}>Let’s Make a<br />Better <span>Planet</span></h1>
                    <p className={s.slider__text}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button className="button slider__button">SHOP NOW</button>
                </div>
                <div className={s.slider__right}>
                    <img src={SLiderIcon} alt="slider__icon" className={s.slider__icon} />
                </div>
            </SwiperSlide>
            <SwiperSlide className={s.slide}>
                <div className={s.slider__left}>
                    <p className={s.slider__subtitle}>Welcome to GreenShop</p>
                    <h1 className={s.slider__title}>Let’s Make a<br />Better <span>Planet</span></h1>
                    <p className={s.slider__text}>We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
                    <button className="button slider__button">SHOP NOW</button>
                </div>
                <div className={s.slider__right}>
                    <img src={SLiderIcon} alt="slider__icon" className={s.slider__icon} />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;