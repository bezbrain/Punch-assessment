import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./management/features/navSlice";
import heroReducer from "./management/features/heroSlice";
import mediaReducer from "./management/features/mediaSlice";

export const store = configureStore({
  reducer: {
    navStore: navReducer,
    heroStore: heroReducer,
    mediaStore: mediaReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
