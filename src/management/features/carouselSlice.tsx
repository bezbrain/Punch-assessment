import { createSlice } from "@reduxjs/toolkit";

interface CarouselStates {
  containerLeftValue: number;
}

const initialState: CarouselStates = {
  containerLeftValue: 0,
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    getLeftValue: (state, { payload }) => {
      state.containerLeftValue = payload;
    },
  },
});

export default carouselSlice.reducer;

export const { getLeftValue } = carouselSlice.actions;
