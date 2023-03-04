import goods from '../assets/goods.json';

const get = <T>(mock: T): Promise<T> => new Promise((resolve) => setTimeout(() => resolve(mock), 1_000));


export const getGoods = () => get(goods)
