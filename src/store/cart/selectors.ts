import type { RootStore } from "..";
import { Cart } from "./slice";


export const getTotalCountItemsInCart = (store: RootStore):Cart["commonCount"] => store.cart.commonCount;

export const getGoodsFromCart = (store: RootStore):Cart["goods"] => store.cart.goods

