import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: { weekDeal: {}, products: {}, categories: {} },
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
  },
});

export const { setWeekDeal, setProducts, setCategories } = productSlice.actions;
export default productSlice.reducer;
export const selectProducts = (state) => state.products.products;
export const selectCategories = (state) => state.products.categories;
export const selectWeekDeal = (state) => state.products.weekDeal;
