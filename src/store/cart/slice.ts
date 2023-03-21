import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Good } from "types";
import { addToCart } from "api";

const SLICE_NAME = "cart";

export const sendToCart = createAsyncThunk(SLICE_NAME, async (product: Good) => {
       const response = await addToCart(product)
       return response;
})

interface GoodInCart {
       good: Good;
       count: number;
       id: string
}[]

const initialState: GoodInCart = {
       good: { categoryTypeId: "", description: "", id: "", img: "", label: "", price: "" },
       count: 0,
       id: ""
}

export const { reducer, actions: sliceActions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {
              
       },
       // extraReducers: (builder) => {
       //        builder.addCase(addToCart.fulfilled, (state, action) => {
       //               const { productId } = action.payload;
       //               return [...state, productId];
       //        });
       // },


})
export const actions = { ...sliceActions }
// export { reducer }
