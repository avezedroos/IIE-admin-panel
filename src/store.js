import { configureStore } from "@reduxjs/toolkit";
import salesReducer from "./features/salesSlice";
import metaReducer from "./features/metaData";

export const store = configureStore({
  reducer: {
    sales: salesReducer,
    meta:metaReducer,
  },
});