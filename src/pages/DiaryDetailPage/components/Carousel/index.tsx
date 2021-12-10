import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import DUMMY_STICKER from 'assets/sticker/ic_socks.svg';

import styles from './Carousel.module.scss';

import classNames from 'classnames/bind';
import { DiaryPicture } from 'models/Diary';
import { useRef, useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

const cx = classNames.bind(styles);

interface CarouselProps {
  pictureSubmitRequestList: DiaryPicture[];
}

const Carousel = ({ pictureSubmitRequestList }: CarouselProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const currentPicture = pictureSubmitRequestList[activeSlideIndex];

    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    currentPicture.attachedStickerDtoList.forEach((diaryPictureSticker) => {
      const image = new Image();
      image.src = DUMMY_STICKER;

      image.onload = () => {
        ctx.drawImage(image, diaryPictureSticker.stickerX, diaryPictureSticker.stickerY, 50, 60);
      };
    });
  }, [activeSlideIndex, pictureSubmitRequestList]);

  return (
    <Swiper
      modules={[Pagination]}
      className={cx('carousel')}
      slidesPerView={1}
      onSlideChange={(e) => setActiveSlideIndex(e.realIndex)}
      pagination={{ clickable: true }}
    >
      {pictureSubmitRequestList.map((diaryPicture) => (
        <SwiperSlide key={diaryPicture.diaryPictureId}>
          <canvas
            ref={canvasRef}
            className={cx('carousel__item')}
            style={{ backgroundImage: `url(${diaryPicture.imageUrl})` }}
          />
        </SwiperSlide>
      ))}
      <button type="button">스티커 추가</button>
    </Swiper>
  );
};

export default Carousel;
