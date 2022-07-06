import { createSlice } from "@reduxjs/toolkit";

const showNavSlice = createSlice({
  name: "showNav",
  initialState: { nav: false, search: false },
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
     hideSearch: (state) => {
      state.search = false;
    },
    showSearch: (state) => {
      state.search = true;
    },
    toggleSearch: (state) => {
      state.search = !state.search;
    },
  },
});

export const { hideNav, showNav, toggleNav, hideSearch, showSearch, toggleSearch } = showNavSlice.actions;
export default showNavSlice.reducer;
export const selectNav = (state) => state.showNav.nav;
export const selectSearch = (state) => state.showNav.search;
