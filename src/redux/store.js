import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
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
import bookingReducer from "./bookTruck/slice.js";

// export const store = configureStore({
//   reducer: {
//     trucks: trucksSlice,
//     booking: bookingSlice,
//   },
// });

const favouritesPersistConfig = {
  key: "trucks",
  storage,
  whitelist: ["favourites"],
};

export const store = configureStore({
  reducer: {
    trucks: persistReducer(favouritesPersistConfig, trucksReducer),
    booking: bookingReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
