import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import styles from './Carousel.module.scss';

import classNames from 'classnames/bind';
import Thumbnail from 'components/Thumbnail';
import { DiaryPicture } from 'models/Diary';
import { useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { getStickerImage } from 'utils/sticker';

const cx = classNames.bind(styles);

interface CarouselProps {
  pictureSubmitRequestList: DiaryPicture[];
}

const Carousel = ({ pictureSubmitRequestList }: CarouselProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const currentPicture = pictureSubmitRequestList[activeSlideIndex];

  return (
    <Swiper
      modules={[Pagination]}
      className={cx('carousel')}
      slidesPerView={1}
      onSlideChange={(e) => setActiveSlideIndex(e.realIndex)}
      pagination={{ clickable: true }}
    >
      {pictureSubmitRequestList.map((diaryPicture) => (
        <SwiperSlide className={cx('carousel__item')} key={diaryPicture.diaryPictureId}>
          <Thumbnail className={cx('carousel__item-thumbnail')} src={diaryPicture.imageUrl} />
          {currentPicture.attachedStickerDtoList.map((diaryPictureSticker) => (
            <img
              style={{ top: `${diaryPictureSticker.stickerY}%`, left: `${diaryPictureSticker.stickerX}%` }}
              key={diaryPictureSticker.stickerId}
              className={cx('carousel__item-sticker')}
              src={getStickerImage(diaryPictureSticker.stickerId)}
              alt="sticker"
            />
          ))}
        </SwiperSlide>
      ))}
      <button type="button">스티커 추가</button>
    </Swiper>
  );
};

export default Carousel;
