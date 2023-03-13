import { createSlice } from "@reduxjs/toolkit";
import { Good } from "../../types";

interface GoodInCart {
       goods: Good[];
       totalCount: number;
       id: string;
}
const SLICE_NAME = "cart"

const initialState: GoodInCart = {
       goods: [],
       totalCount: 0,
       id: ""
}


const { reducer, actions: sliceActions } = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {
            setItemInCart:(state, action) => {
              state.totalCount++;
              state.goods.push(action.payload)
            },
            deleteItemFromCart:(state) => {
              state.totalCount--;
            },    
       },
       
})
export const actions = { ...sliceActions }
export { reducer }
