import type { RootStore } from "..";


export const getCountItemsInCart = (store: RootStore) => store.cart.count;

export const getGoodsItemsFromCart = (store: RootStore) => store.cart.goods