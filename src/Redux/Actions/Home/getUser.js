import { createAsyncThunk } from "@reduxjs/toolkit";
import { getRandomuser } from "Utils/api";
import { setIsLoading } from "./general";

export const actionGetUser = createAsyncThunk(
  "home/getUser",
  async (props, { dispatch, getState, rejectWithValue }) => {
    try {
      const { data } = await getRandomuser();
      dispatch(setIsLoading(true));
      return data.users;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
