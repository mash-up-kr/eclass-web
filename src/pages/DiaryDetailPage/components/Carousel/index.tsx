import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';

import { ReactComponent as CaretLeft } from 'assets/ic_caret_left.svg';

import styles from './Carousel.module.scss';

import classNames from 'classnames/bind';
import SVGButton from 'components/SVGButton';
import Thumbnail from 'components/Thumbnail';
import { DiaryPicture } from 'models/Diary';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { getStickerImage } from 'utils/sticker';

const cx = classNames.bind(styles);

interface CarouselProps {
  pictureSubmitRequestList: DiaryPicture[];
}

// MEMO(@mango906): 주석쳐져 있는 요소들은 배포를 위해 미구현된 기능을 잠시 가린 주석입니다.

const Carousel = ({ pictureSubmitRequestList }: CarouselProps) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const currentPicture = pictureSubmitRequestList[activeSlideIndex];

  const { goBack } = useHistory();

  return (
    <Swiper
      modules={[Pagination]}
      className={cx('carousel')}
      slidesPerView={1}
      onSlideChange={(e) => setActiveSlideIndex(e.realIndex)}
      pagination={{ clickable: true }}
    >
      <SVGButton className={cx('carousel__back-btn')} icon={<CaretLeft />} onClick={() => goBack()} />

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
      {/* <button className={cx('carousel__add-btn')} type="button">
        스티커 추가
      </button> */}
    </Swiper>
  );
};

export default Carousel;
