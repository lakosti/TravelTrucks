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
    filtered: (state, { payload }) => {},
    getFavouritesList: (state, { payload }) => {
      state.favourites.push(payload);
    },
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

export const { filtered, getFavouritesList } = trucksReducer.actions;

export default trucksReducer.reducer;
