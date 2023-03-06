import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../../types";

interface GoodInCart {
       goods: Good[];
       count: number;
       id: string;
}
const SLICE_NAME = "cart"

const initialState: GoodInCart = {
       goods: [],
       count: 0,
       id: ""
}

const { reducer, actions: sliceActions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {
            setItemInCart:(state, action) => {
              state.count++;
              state.goods.push(action.payload)
            },
            deleteItemFromCart:(state) => {
              state.count--;
            },    
       },
       
})
export const actions = { ...sliceActions }
export { reducer }
