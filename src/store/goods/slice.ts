import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getGoods } from "api";
import { Good, LOAD_STATUSES_TYPES } from "types"

const SLICE_NAME = "goods";

export const goodsOnBack = createAsyncThunk(SLICE_NAME, getGoods)


export interface GoodsStore {
       loadStatus: LOAD_STATUSES_TYPES;
       goods: Good[];
       total: number;
}

const initialState: GoodsStore = {
       loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
       goods: [],
       total: 0,
}
export const { reducer, actions } = createSlice({
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
                     state.total = action.payload.total;
                    
              })
       }
})

// export { reducer }
export const actionsGoods = { goodsOnBack }

