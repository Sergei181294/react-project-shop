import goods from '../assets/goods.json';
import categories from "../assets/categories.json"

const get = <T>(mock: T): Promise<T> => new Promise((resolve) => setTimeout(() => resolve(mock), 1_000));


export const getGoods = () => get(goods);

export const getCategories = () => get(categories);