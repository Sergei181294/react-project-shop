import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "api";

const SLICE_NAME = "auth";

const loginThunk = createAsyncThunk(`${SLICE_NAME}/loginThunk`, async (credentials: { login: string; password: string }) => {
       const response = await login(credentials);
       localStorage.setItem("userToken", response.token)
       return response
})

export interface GoodsStore {
       isAuth: boolean;
       login: string;
       token: string
}


const initialState: GoodsStore = {
       isAuth: Boolean(localStorage.getItem("userToken")),
       login: "",
       token: ""
}



const slice = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(loginThunk.fulfilled, (state, action) => {
                     state.isAuth = true
                     state.login = action.payload.login
                     state.token = action.payload.token
              });
       },
})
export const reducer = slice.reducer

export const actions = {
       ...slice.actions,
       loginThunk
}