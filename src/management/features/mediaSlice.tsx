import { createSlice } from "@reduxjs/toolkit";

interface MediaState {
  isCardOpen: boolean;
}

const initialState: MediaState = {
  isCardOpen: false,
};

const mediaSlice = createSlice({
  name: "media",
  initialState,
  reducers: {
    openACard: (state) => {
      //
    },
  },
});

export default mediaSlice.reducer;

export const { openACard } = mediaSlice.actions;
