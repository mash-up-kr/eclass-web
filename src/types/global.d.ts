import { Nullable } from 'utils/type';

interface JsInterface {
  getToken(): string;
}

declare global {
  interface Window {
    globalConfig: {
      [key: string]: Nullable<string>;
    };

    Mobile?: JsInterface;
  }
}
