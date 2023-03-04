import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../api";
import { Category, LOAD_STATUSES_TYPES } from "../../types"

const SLICE_NAME = "categories";

const categoriesOnBack = createAsyncThunk(SLICE_NAME, getCategories)


interface GoodsStore {
       loadStatus: string;
       categories: Category[];
}

const initialState: GoodsStore = {
       loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
       categories: [{
              id: "",
              type: "",
              label: "",
       }]
}
const { reducer, actions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(categoriesOnBack.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING;
              });
              builder.addCase(categoriesOnBack.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR;
              });
              builder.addCase(categoriesOnBack.fulfilled, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED;
                     state.categories = action.payload;
              })
       }
})

export { reducer }
export const actionsCategories = { categoriesOnBack }
