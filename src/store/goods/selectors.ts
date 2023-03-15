import type { RootStore } from "..";
import { LOAD_STATUSES_TYPES } from "types";
import { Good } from "types";

export const getLoadStatusGoods = (store: RootStore):LOAD_STATUSES_TYPES => store.goods.loadStatus;

export const getGoodsFromStore = (store: RootStore):Good[] => store.goods.goods;