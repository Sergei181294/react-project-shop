import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { reducer as goodsReducer } from "./goods/reducer"
import { reducer as categoriesReducer } from "./categories/reducer"

const reducer = combineReducers({
       goods: goodsReducer,
       categories: categoriesReducer,
});

export const store = configureStore({
       reducer: reducer
})



export type RootStore = ReturnType<typeof store.getState>