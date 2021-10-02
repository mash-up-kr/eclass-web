import DUMMY_DIARY_DOG_IMAGE from 'assets/img_dummy_diary_dog.png';

import styles from './Carousel.module.scss';

import classNames from 'classnames/bind';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

const cx = classNames.bind(styles);

const Carousel = () => {
  SwiperCore.use([Pagination]);

  return (
    <Swiper className={cx('carousel')} slidesPerView={1} pagination={{ clickable: true }}>
      <SwiperSlide>
        <img className={cx('carousel__item')} src={DUMMY_DIARY_DOG_IMAGE} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={DUMMY_DIARY_DOG_IMAGE} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={DUMMY_DIARY_DOG_IMAGE} alt="" />
      </SwiperSlide>
      <button type="button" className={cx('carousel__')}>
        스티커 추가
      </button>
    </Swiper>
  );
};

export default Carousel;
