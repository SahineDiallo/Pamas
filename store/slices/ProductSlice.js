import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { weekDeal: {}, products: {}, categories: {}, subImages: 1 },
  reducers: {
    setWeekDeal: (state, action) => {
      state.weekDeal = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setSubImages: (state, action) => {
      state.subImages = action.payload;
    },
  },
});

export const { setWeekDeal, setProducts, setCategories, setSubImages } =
  productSlice.actions;
export default productSlice.reducer;
export const selectProducts = (state) => state.products.products;
export const selectCategories = (state) => state.products.categories;
export const selectWeekDeal = (state) => state.products.weekDeal;
export const selectSubImages = (state) => state.products.subImages;
