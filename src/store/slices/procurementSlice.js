import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import requests from "../../mocks/requests.json";

export const fetchRequests =
  createAsyncThunk(
    "procurement/fetchRequests",
    async () => {
      return requests;
    }
  );

const procurementSlice =
  createSlice({
    name: "procurement",

    initialState: {
      requests: [],
      loading: false,
    },

    reducers: {},

    extraReducers: (builder) => {
      builder

        .addCase(
          fetchRequests.pending,
          (state) => {
            state.loading = true;
          }
        )

        .addCase(
          fetchRequests.fulfilled,
          (state, action) => {
            state.loading = false;
            state.requests =
              action.payload;
          }
        )

        .addCase(
          fetchRequests.rejected,
          (state) => {
            state.loading = false;
          }
        );
    },
  });

export default procurementSlice.reducer;