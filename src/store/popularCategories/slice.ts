import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPopularCategories } from "api";
import { Category, LOAD_STATUSES_TYPES, Good } from "types"

const SLICE_NAME = "popularCategories";

const popularCategoriesOnBack = createAsyncThunk(SLICE_NAME, getPopularCategories)


export interface PopularCategoriesStore {
       loadStatus: LOAD_STATUSES_TYPES;
       data: {
              category: Category,
              items: Good[]
       }[]
}

 const initialState: PopularCategoriesStore = {
       loadStatus: LOAD_STATUSES_TYPES.SET_UNKNOWN,
       data: [{
              category: { id: "", label: "", type: "" },
              items: []
       }]

}
const { reducer, actions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(popularCategoriesOnBack.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING;
              });
              builder.addCase(popularCategoriesOnBack.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR;
              });
              builder.addCase(popularCategoriesOnBack.fulfilled, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED;
                     state.data = action.payload;
                     
              })
       }
})

export { reducer }
export const actionsPopularCategories = { popularCategoriesOnBack }