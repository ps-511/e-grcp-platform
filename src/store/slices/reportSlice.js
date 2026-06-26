import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reports: [],
};

const reportSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},
});

export default reportSlice.reducer;