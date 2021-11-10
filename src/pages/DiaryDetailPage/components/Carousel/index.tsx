import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import DUMMY_DIARY_DOG_IMAGE from 'assets/img_dummy_diary_dog.png';

import styles from './Carousel.module.scss';

import classNames from 'classnames/bind';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

const cx = classNames.bind(styles);

const Carousel = () => {
  return (
    <Swiper modules={[Pagination]} className={cx('carousel')} slidesPerView={1} pagination={{ clickable: true }}>
      <SwiperSlide>
        <canvas className={cx('carousel__item')} style={{ background: `url(${DUMMY_DIARY_DOG_IMAGE})` }} />
      </SwiperSlide>
      <SwiperSlide>
        <canvas className={cx('carousel__item')} style={{ background: `url(${DUMMY_DIARY_DOG_IMAGE})` }} />
      </SwiperSlide>
      <SwiperSlide>
        <canvas className={cx('carousel__item')} style={{ background: `url(${DUMMY_DIARY_DOG_IMAGE})` }} />
      </SwiperSlide>
      <button type="button" className={cx('carousel__')}>
        스티커 추가
      </button>
    </Swiper>
  );
};

export default Carousel;
