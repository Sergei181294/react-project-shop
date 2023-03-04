import type { RootStore } from "..";

export const getLoadStatusGoods = (store: RootStore) => store.goods.loadStatus;

export const getGoodsFromStore = (store: RootStore) => store.goods.goods;