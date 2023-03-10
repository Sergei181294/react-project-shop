import type { RootStore } from "..";
import { Good } from "../../types";


export const getTotalCountItemsInCart = (store: RootStore):number => store.cart.totalCount;

export const getGoodsItemsFromCart = (store: RootStore):Good[] => store.cart.goods