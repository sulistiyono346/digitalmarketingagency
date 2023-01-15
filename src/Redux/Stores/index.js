import { configureStore } from "@reduxjs/toolkit";
import createRootReducer from "Redux/RootReducer";
import { requestInterceptors, responseInterceptors } from "Utils/interceptors";
requestInterceptors();
responseInterceptors();

export const store = configureStore({
  reducer: createRootReducer,
});
