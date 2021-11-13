export interface Diary {
  diaryId: number;
  content: string;
  pictureSubmitRequestList: DiaryPicture[];
  badgeResponseDto: Badge;
  createdAt: string;
}

export interface DiaryPicture {
  diaryPictureId: number;
  imageUrl: string;
  isThumbnail: boolean;
  attachedStickerDtoList: DiaryPictureSticker[];
}

export interface DiaryPictureSticker {
  stickerId: number;
  stickerX: number;
  stickerY: number;
}

export interface Badge {
  badgeId: number;
  name: string;
  imageUrl: string;
}
