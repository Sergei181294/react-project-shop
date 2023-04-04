import type { RootStore } from "..";
import { Cart } from "./slice";

export const getGoodsFromCart = (store: RootStore): Cart["goods"] => store.cart.goods

export const getCommonCount = (store: RootStore) => {
       return getGoodsFromCart(store).reduce((acc, obj) => acc + obj.count, 0)
}

export const getCommonPrice = (store: RootStore) => {
       return getGoodsFromCart(store).reduce((acc, obj) => acc + (obj.count * +obj.good.price), 0)
}

