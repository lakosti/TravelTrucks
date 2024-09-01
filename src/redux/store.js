import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import trucksReducer from "./trucks/slice.js";

// export const store = configureStore({
//   reducer: {
//     trucks: trucksSlice,
//     booking: bookingSlice,
//   },
// });

const favouritesPersistConfig = {
  key: "favouritesTrucks",
  storage,
  whitelist: ["favourites"],
};

export const store = configureStore({
  reducer: {
    trucks: persistReducer(favouritesPersistConfig, trucksReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
