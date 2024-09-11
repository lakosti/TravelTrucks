import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { BASE_URL } from "../../utils/constants.js";

export const getTracks = createAsyncThunk(
  "tracks/getTracks",
  async ({ page, limit, filters }, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}/campers`, {
        params: {
          page,
          limit,
          ...filters,
        },
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTrackById = createAsyncThunk(
  "trackById/getTrackById",
  async (id, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}/campers/${id}`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTrucksMore = createAsyncThunk(
  "trucks/getTrucksMore",
  async ({ page, limit, filters }, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}/campers`, {
        params: {
          page,
          limit,
          ...filters,
        },
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getAllCities = createAsyncThunk(
  "cities/getCities",
  async (_, thunkApi) => {
    try {
      const res = await axios.get(`${BASE_URL}/campers`);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
