import { createSlice } from "@reduxjs/toolkit";

const complianceSlice = createSlice({
  name: "compliance",
  initialState: {
    violations: 4,
  },
  reducers: {},
});

export default complianceSlice.reducer;