import { createSlice } from "@reduxjs/toolkit";

import {
  getAllCities,
  getTrackById,
  getTracks,
  getTrucksMore,
} from "./operations.js";

const initialState = {
  list: [],
  totalPages: 1,
  favourites: [],
  isLoading: false,
  isError: null,
  allCities: [],
  currentTrucks: null,
  filters: {
    form: "",
    location: "",
    detail: {},
  },
};

const trucksReducer = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    toggleFavouritesList: (state, { payload }) => {
      //знаходимо індекс по якому людина натиснула
      const index = state.favourites.findIndex(
        (item) => item.id === payload.id
      );
      if (index >= 0) {
        state.favourites.splice(index, 1);
      } else {
        state.favourites.push(payload);
      }
    },
    filteredList: (state, { payload }) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getTracks.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getTracks.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.totalPages = payload.total;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(getTracks.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getTrucksMore.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getTrucksMore.fulfilled, (state, { payload }) => {
      state.list = payload;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(getTrucksMore.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(getTrackById.fulfilled, (state, { payload }) => {
      state.currentTrucks = payload; //закидаємо в стейт по айді грузовик
    });
    builder.addCase(getAllCities.fulfilled, (state, { payload }) => {
      state.allCities = payload.items.map(({ location }) => location);
    });
  },
});

export const { filteredList, toggleFavouritesList } = trucksReducer.actions;

export default trucksReducer.reducer;

// AC(pin):true +
// bathroom(pin):true +
// kitchen(pin):true +
// TV(pin):false +
// transmission: automatic; +

// radio(pin):true
// refrigerator(pin):true
// microwave(pin):true
// gas(pin):true
// water(pin):true
