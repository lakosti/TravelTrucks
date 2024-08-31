import { createSlice } from "@reduxjs/toolkit";

import { getTracks, getTrucksMore } from "./operations.js";

const initialState = {
  list: [],
  totalPages: 1,
  favourites: [],
  isLoading: false,
  isError: null,
  filters: {
    type: "",
    location: "",
    detail: {},
  },
};

const trucksReducer = createSlice({
  name: "trucks",
  initialState,
  reducers: {
    toggleFavouritesList: (state, { payload }) => {
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
      state.list = payload.items;
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
    builder.addCase(getTrucksMore.fulfilled, (state, action) => {
      state.list = action.payload;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(getTrucksMore.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { filteredList, toggleFavouritesList } = trucksReducer.actions;

export default trucksReducer.reducer;
