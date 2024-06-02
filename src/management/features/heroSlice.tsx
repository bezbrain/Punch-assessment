import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isTIDevelopment: true,
};

const heroSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    focusITDev: (state) => {
      state.isTIDevelopment = true;
    },
    focusDesignAndCreative: (state) => {
      state.isTIDevelopment = false;
    },
  },
});

export default heroSlice.reducer;

export const { focusITDev, focusDesignAndCreative } = heroSlice.actions;
