import { createSlice } from "@reduxjs/toolkit";

const savedTheme =
  localStorage.getItem("theme");

const uiSlice = createSlice({
  name: "ui",

  initialState: {
    darkMode:
      savedTheme
        ? savedTheme === "dark"
        : false,
    notifications: true,
  },

  reducers: {
    setDarkMode: (
      state,
      action
    ) => {
      state.darkMode =
        action.payload;

      localStorage.setItem(
        "theme",
        action.payload
          ? "dark"
          : "light"
      );
    },

    setNotifications: (
      state,
      action
    ) => {
      state.notifications =
        action.payload;
    },
  },
});

export const {
  setDarkMode,
  setNotifications,
} = uiSlice.actions;

export default uiSlice.reducer;