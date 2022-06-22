import { configureStore } from "@reduxjs/toolkit";
import showNavReducer from "./slices/navSlice";
import productsReducer from "./slices/ProductSlice";

export const store = configureStore({
  reducer: {
    showNav: showNavReducer,
    products: productsReducer,
  },
});
