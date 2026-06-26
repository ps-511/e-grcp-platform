import { createSlice } from "@reduxjs/toolkit";

const auditSlice = createSlice({
  name: "audit",
  initialState: {
    completedAudits: 18,
  },
  reducers: {},
});

export default auditSlice.reducer;