import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Badge,
  IconButton,
  Switch,
  Avatar,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { useState,useCallback } from "react";

import NotificationsIcon from "@mui/icons-material/Notifications";

import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  setDarkMode,
} from "../store/slices/uiSlice";

function Header() {
  const dispatch =
    useDispatch();

  const navigate =
    useNavigate();

  const [search, setSearch] =
    useState("");

  const darkMode =
    useSelector(
      (state) =>
        state.ui.darkMode
    );

  const user =
    useSelector(
      (state) =>
        state.auth.user
    );

  const notifications =
    useSelector(
      (state) =>
        state.notifications.items
    );

  const unreadCount =
    notifications.length;

 const handleSearch =
  useCallback(
    (e) => {
      if (
        e.key !== "Enter"
      )
        return;

      const value =
        search
          .toLowerCase()
          .trim();

      if (
        value.startsWith(
          "dash"
        )
      )
        navigate(
          "/dashboard"
        );

      else if (
        value.startsWith(
          "ven"
        )
      )
        navigate(
          "/vendors"
        );

      else if (
        value.startsWith(
          "proc"
        )
      )
        navigate(
          "/procurement"
        );

      else if (
        value.startsWith(
          "risk"
        )
      )
        navigate(
          "/risk"
        );

      else if (
        value.startsWith(
          "comp"
        )
      )
        navigate(
          "/compliance"
        );

      else if (
        value.startsWith(
          "aud"
        )
      )
        navigate(
          "/audit"
        );

      else if (
        value.startsWith(
          "rep"
        )
      )
        navigate(
          "/reports"
        );

      else if (
        value.startsWith(
          "app"
        )
      )
        navigate(
          "/approval"
        );

      else if (
        value.startsWith(
          "not"
        )
      )
        navigate(
          "/notifications"
        );

      else if (
        value.startsWith(
          "set"
        )
      )
        navigate(
          "/settings"
        );
    },
    [search, navigate]
  );

  return (
    <AppBar
      position="static"
      sx={{
        background:
          "#1e293b",
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ mr: 4 }}
        >
          e-GRCP Platform
        </Typography>

        <TextField
          size="small"
          placeholder="Global Search"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          onKeyDown={
            handleSearch
          }
          sx={{
            width: 250,
            bgcolor:
              "white",
            borderRadius: 1,
          }}
        />

        <Box
          sx={{
            flexGrow: 1,
          }}
        />

        <Badge
          badgeContent={
            unreadCount
          }
          color="error"
        >
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Badge>

        <Switch
          checked={darkMode}
          onChange={(e) =>
            dispatch(
              setDarkMode(
                e.target
                  .checked
              )
            )
          }
        />

        <Avatar
          sx={{
            ml: 2,
          }}
        >
          {user?.name?.charAt(
            0
          ) || "A"}
        </Avatar>

        <Typography
          sx={{
            ml: 1,
          }}
        >
          {user?.name ||
            "Admin"}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;