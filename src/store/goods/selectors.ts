import type { RootStore } from "..";
import { GoodsStore } from "./slice";
import { Good } from "types";

export const getLoadStatusGoods = (store: RootStore):GoodsStore["loadStatus"] => store.goods.loadStatus;

export const getGoodsFromStore = (store: RootStore):GoodsStore["goods"] => store.goods.goods;