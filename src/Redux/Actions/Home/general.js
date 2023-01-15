import { createSlice } from "@reduxjs/toolkit";
import { actionGetUser } from "./getUser";

const initialState = {
  isLoading: false,
  users: [],
  errorMessage: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: {
    [actionGetUser.pending]: (state) => {
      state.isLoading = true;
    },
    [actionGetUser.fulfilled]: (state, { payload }) => {
      state.users = payload;
    },
    [actionGetUser.rejected]: (state, { payload }) => {
      state.errorMessage = { errorMessage: payload?.error?.message };
    },
  },
});

export const { setIsLoading } = homeSlice.actions;

export default homeSlice.reducer;
