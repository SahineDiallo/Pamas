import { createSlice } from "@reduxjs/toolkit";

const showNavSlice = createSlice({
  name: "showNav",
  initialState: { nav: false },
  reducers: {
    hideNav: (state) => {
      state.nav = false;
    },
    showNav: (state) => {
      state.nav = true;
    },
    toggleNav: (state) => {
      state.nav = !state.nav;
    },
  },
});

export const { hideNav, showNav, toggleNav } = showNavSlice.actions;
export default showNavSlice.reducer;
export const selectNav = (state) => state.showNav.nav;
