import { createSlice } from "@reduxjs/toolkit";

import { sendForm } from "./operation.js";

const initialState = {
  booking: [],
  isLoading: false,
  isError: null,
};

const bookingReducer = createSlice({
  name: "booking",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendForm.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(sendForm.fulfilled, (state, { payload }) => {
        state.booking.push(payload);
        state.isLoading = false;
        state.isError = null;
      })
      .addCase(sendForm.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isError = payload;
      });
  },
});

export default bookingReducer.reducer;
