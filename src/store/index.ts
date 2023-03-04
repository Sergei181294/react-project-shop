import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { reducer as goodsReducer } from "./goods/reducer"

const reducer = combineReducers({
       goods: goodsReducer,
});

export const store = configureStore({
       reducer: reducer
})

export type RootStore = ReturnType<typeof store.getState>