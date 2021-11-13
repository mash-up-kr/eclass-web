import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import DUMMY_DIARY_DOG_IMAGE from 'assets/img_dummy_diary_dog.png';
import DUMMY_STICKER from 'assets/sticker/ic_socks.svg';

import styles from './Carousel.module.scss';

import classNames from 'classnames/bind';
import { DiaryPicture } from 'models/Diary';
import { useRef, useEffect } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

const cx = classNames.bind(styles);

interface CarouselProps {
  pictureSubmitRequestList: DiaryPicture[];
}

const Carousel = ({ pictureSubmitRequestList }: CarouselProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    pictureSubmitRequestList[0].attachedStickerDtoList.forEach((sticker) => {
      const image = new Image();
      image.src = DUMMY_STICKER;
      image.onload = () => {
        ctx.drawImage(image, sticker.stickerX, sticker.stickerY, 50, 60);
      };
    });
  }, [pictureSubmitRequestList]);

  return (
    <Swiper modules={[Pagination]} className={cx('carousel')} slidesPerView={1} pagination={{ clickable: true }}>
      {pictureSubmitRequestList.map((diaryPicture) => (
        <SwiperSlide key={diaryPicture.diaryPictureId}>
          <canvas
            ref={canvasRef}
            className={cx('carousel__item')}
            style={{ backgroundImage: `url(${DUMMY_DIARY_DOG_IMAGE})` }}
          />
        </SwiperSlide>
      ))}
      <button type="button">스티커 추가</button>
    </Swiper>
  );
};

export default Carousel;
