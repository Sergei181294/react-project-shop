import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { reducer as goodsReducer } from "./goods/slice"
import { reducer as categoriesReducer } from "./categories/slice"
import { reducer as cartReducer } from "./cart/slice"

const reducer = combineReducers({
       goods: goodsReducer,
       categories: categoriesReducer,
       cart: cartReducer,
});

export const store = configureStore({
       reducer: reducer
})



export type RootStore = ReturnType<typeof store.getState>