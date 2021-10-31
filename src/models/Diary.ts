export interface Diary {
  diaryId: number;
  content: string;
  pictureSubmitRequestList: DiaryPicture[];
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
