import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Good } from "types";
import { addToCart } from "api";

const SLICE_NAME = "cart";

export const sendToCart = createAsyncThunk(SLICE_NAME, async (product: Good) => {
       await addToCart(product);
})

interface GoodInCart {
       products: [{
              good: Good;
              count: number;
              id: string
       }]
}

const initialState: GoodInCart = {
       products: [{
              good: { categoryTypeId: "", description: "", id: "", img: "", label: "", price: "" },
              count: 0,
              id: ""
       }]
}

export const { reducer, actions: sliceActions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(sendToCart.fulfilled, (state, action) => {
                     state.products.push()
              });
       },
})
export const actions = { ...sliceActions }
// export { reducer }
