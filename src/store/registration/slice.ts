import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES_TYPES } from "types";
import { registration } from "api";

const SLICE_NAME = "user";

export const registrationThunk = createAsyncThunk(`${SLICE_NAME}/registrationThunk`, registration)

export interface PostUserProps {
       loadStatus:string,
       token:string,
}

const initialState: PostUserProps = {
       loadStatus:LOAD_STATUSES_TYPES.SET_UNKNOWN,
       token:"",
}

 const slice = createSlice({
       name: SLICE_NAME,
       initialState,
       reducers: {},
       extraReducers: (builder) => {
              builder.addCase(registrationThunk.pending, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADING
              });
              builder.addCase(registrationThunk.rejected, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_ERROR
              })
              builder.addCase(registrationThunk.fulfilled, (state, action) => {
                     state.loadStatus = LOAD_STATUSES_TYPES.SET_LOADED
              })
       },
})
export const reducer = slice.reducer

export const actions = {
       ...slice.actions,
       registrationThunk
}

