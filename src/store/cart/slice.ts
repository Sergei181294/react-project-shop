import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Good, LOAD_STATUSES_TYPES } from "types";
import { addToCart, getCart } from "api";

const SLICE_NAME = "cart";

const getCartData = createAsyncThunk(`${SLICE_NAME}/getCartData`, getCart)

export const addGoodInCart = createAsyncThunk(`${SLICE_NAME}/addGoodInCart`, async (body: { good?: Good, count?: number, id?: string }, thunkApi) => {
       const response = await addToCart(body);
       thunkApi.dispatch(getCartData())
       return response;
})

export interface GoodInCart {
       good: Good;
       count: number;
       id: string
}

export interface Cart {
       goods: GoodInCart[];
       commonCount: number;
       loadStatus: string;
}

const initialState: Cart = {
       goods: [],
       commonCount: 0,
       loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
}

export const slice = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(getCartData.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING
              })
              builder.addCase(getCartData.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR
              })
              builder.addCase(getCartData.fulfilled, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED
                     state.commonCount = state.goods.reduce((acc, obj) => acc + obj.count, 0)
                     state.goods = action.payload
              })
              builder.addCase(addGoodInCart.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING
              })
              builder.addCase(addGoodInCart.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR
              })
              builder.addCase(addGoodInCart.fulfilled, (state, action) => {
                     state.goods = action.payload
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED

              })
       },
})
export const reducer = slice.reducer

export const actions = {
       ...slice.actions,
       getCartData,
       addGoodInCart
}
