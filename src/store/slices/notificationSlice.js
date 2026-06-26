import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notifications",
  initialState: {
    items: [
      {
        id: 1,
        message: "Vendor review pending",
      },
      {
        id: 2,
        message: "Compliance document expired",
      },
    ],
  },
  reducers: {},
});

export default notificationSlice.reducer;