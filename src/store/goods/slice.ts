import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoods } from "api";
import { Good, LOAD_STATUSES_TYPES } from "types"

const SLICE_NAME = "goods";

const goodsOnBack = createAsyncThunk(SLICE_NAME, getGoods)


interface GoodsStore {
       loadStatus: LOAD_STATUSES_TYPES;
       goods: Good[];
}

const initialState: GoodsStore = {
       loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
       goods: []
}
const { reducer, actions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(goodsOnBack.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING;
              });
              builder.addCase(goodsOnBack.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR;
              });
              builder.addCase(goodsOnBack.fulfilled, (state, action) => {  
                     state.loadStatus =  LOAD_STATUSES_TYPES.SET_LOADED;  
                     state.goods = action.payload.items;      
              })
       }
})

export { reducer }
export const actionsGoods = { goodsOnBack }

