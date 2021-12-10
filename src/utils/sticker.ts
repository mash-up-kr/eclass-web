import { Stickers } from 'apis/core';

export const getStickerImage = (stickerId: number) => {
  const targetSticker = Stickers.find((sticker) => sticker.stickerId === stickerId);

  return targetSticker?.imageUrl ?? '';
};
