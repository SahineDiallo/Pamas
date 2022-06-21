import { configureStore } from "@reduxjs/toolkit";
import showNavReducer from "./slices/navSlice";

export const store = configureStore({
  reducer: {
    showNav: showNavReducer,
  },
});

