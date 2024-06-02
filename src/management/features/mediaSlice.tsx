import { createSlice } from "@reduxjs/toolkit";

interface MediaState {
  isCardOpen: null | string;
}

const initialState: MediaState = {
  isCardOpen: null,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    openACard: (state, { payload }) => {
      state.isCardOpen = payload;
    },
    closeACard: (state) => {
      state.isCardOpen = null;
    },
  },
});

export default mediaSlice.reducer;

export const { openACard, closeACard } = mediaSlice.actions;
