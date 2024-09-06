import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/conterSlice.js";

export const store = configureStore({
  reducer: { counter: counterReducer },
});
