export type Nullish = null | undefined;
export type Nullable<T> = T | undefined | null;

export const isNullish = (val: unknown): val is Nullish => val == null;
