import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import vendorService from "../../services/vendorService";

export const fetchVendors = createAsyncThunk(
  "vendors/fetchVendors",
  async () => {
    const data = await vendorService.getAllVendors();
    return data;
  }
);

const vendorSlice = createSlice({
  name: "vendors",

  initialState: {
    vendors: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchVendors.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchVendors.fulfilled, (state, action) => {
        state.loading = false;
        state.vendors = action.payload;
      })

      .addCase(fetchVendors.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default vendorSlice.reducer;