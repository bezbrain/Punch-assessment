import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    openNav: (state) => {
      state.isOpen = true;
    },
    closeNav: (state) => {
      state.isOpen = false;
    },
  },
});

export default navSlice.reducer;

export const { openNav, closeNav } = navSlice.actions;
