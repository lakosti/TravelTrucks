import axios from "axios";
import toast from "react-hot-toast";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../../utils/constants.js";

export const sendForm = createAsyncThunk(
  "sendForm/CreatesendForm",
  async (data, thunkAPI) => {
    try {
      const respons = await axios.post(`${BASE_URL}/booking`, data);
      toast.success("Thank you for booking! Our manager will contact you!");
      return respons.data;
    } catch (error) {
      toast.error("Something went wrong! Please, try later!");
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
