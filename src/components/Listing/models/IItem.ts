// Необязательные свойства так как в полученных данных предложение может не иметь данных полей из-за ошибки

export interface IItem {
  listing_id: number,  // уникальный идентификатор предложения, число
  title?: string,  // название предложения, строка;
  currency_code?: string,  // код валюты, строка
  price?: string,  // цена, строка
  quantity?: number,  // доступное количество, число
  url?: string,  // ссылка на предложение, строка;
  MainImage?: {
    url_570xN: string  // информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка
  },
  error_messages?: string[]  // используем так как есть предложение с ошибкой
}