import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux"
import { reducer as goodsReducer } from "./goods/slice"
import { reducer as categoriesReducer } from "./categories/slice"
import { reducer as cartReducer } from "./cart/slice"
import { reducer as popularCategoriesReducer } from "./popularCategories/slice"
import { reducer as registrationReducer } from "./registration/slice"
import { reducer as loginReducer } from "./auth/slice"

const reducer = combineReducers({
       goods: goodsReducer,
       categories: categoriesReducer,
       cart: cartReducer,
       popularCategories: popularCategoriesReducer,
       registration: registrationReducer,
       login: loginReducer
});

export const store = configureStore({
       reducer: reducer
})



export type RootStore = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch