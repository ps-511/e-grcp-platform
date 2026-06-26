import { useState } from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
  Switch,
  FormControlLabel,
} from "@mui/material";

import {
  setDarkMode,
  setNotifications,
} from "../../store/slices/uiSlice";

function SettingsPage() {
  const dispatch =
    useDispatch();

  const user = useSelector(
    (state) => state.auth.user
  );
const [openPasswordDialog, setOpenPasswordDialog] =
  useState(false);

const [currentPassword, setCurrentPassword] =
  useState("");

const [newPassword, setNewPassword] =
  useState("");

const [confirmPassword, setConfirmPassword] =
  useState("");

const [passwordMessage, setPasswordMessage] =
  useState("");
  const darkMode =
    useSelector(
      (state) =>
        state.ui.darkMode
    );

  const notifications =
    useSelector(
      (state) =>
        state.ui.notifications
    );

  const theme =
    darkMode
      ? "Dark"
      : "Light";

const handlePasswordChange = () => {
const storedPassword =
  user?.password;

  if (
    newPassword.length < 6
  ) {
    setPasswordMessage(
      "Password must be at least 6 characters"
    );
    return;
  }

  if (
    newPassword !==
    confirmPassword
  ) {
    setPasswordMessage(
      "Passwords do not match"
    );
    return;
  }

  localStorage.setItem(
    "password",
    newPassword
  );

 setPasswordMessage(
  "Password Changed Successfully"
);

setTimeout(() => {
  setOpenPasswordDialog(
    false
  );

  setPasswordMessage("");

  setCurrentPassword("");
  setNewPassword("");
  setConfirmPassword("");
}, 1500);

  setCurrentPassword("");
  setNewPassword("");
  setConfirmPassword("");
};
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        User Settings
      </Typography>

      <Grid
        container
        spacing={3}
      >
        {/* PROFILE */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
            >
              Profile
            </Typography>

            <TextField
              fullWidth
              label="Name"
              value={
                user?.name || ""
              }
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Email"
              value={
                user?.email || ""
              }
              InputProps={{
                readOnly: true,
              }}
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Role"
              value={
                user?.role || ""
              }
              InputProps={{
                readOnly: true,
              }}
            />
          </Paper>
        </Grid>

        {/* THEME */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
            >
              Theme
            </Typography>

            <TextField
              select
              fullWidth
              label="Theme"
              value={theme}
              onChange={(e) =>
                dispatch(
                  setDarkMode(
                    e.target
                      .value ===
                      "Dark"
                  )
                )
              }
            >
              <MenuItem value="Light">
                Light
              </MenuItem>

              <MenuItem value="Dark">
                Dark
              </MenuItem>
            </TextField>
          </Paper>
        </Grid>

        {/* PREFERENCES */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
            >
              Preferences
            </Typography>

            <FormControlLabel
              control={
                <Switch
                  checked={
                    notifications
                  }
                  onChange={() =>
                    dispatch(
                      setNotifications(
                        !notifications
                      )
                    )
                  }
                />
              }
              label="Enable Notifications"
            />
          </Paper>
        </Grid>

        {/* SECURITY */}

        <Grid
          size={{
            xs: 12,
            md: 6,
          }}
        >
          <Paper sx={{ p: 3 }}>
            <Typography
              variant="h6"
              sx={{ mb: 2 }}
            >
              Security
            </Typography>

          <Button
  variant="contained"
  onClick={() =>
    setOpenPasswordDialog(true)
  }
>
  Change Password
</Button>
          </Paper>
        </Grid>
      </Grid>
      <Dialog
  open={openPasswordDialog}
  onClose={() => {
    setOpenPasswordDialog(false);
    setPasswordMessage("");
  }}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle>
    Change Password
  </DialogTitle>

  <DialogContent>
    <TextField
      fullWidth
      type="password"
      label="Current Password"
      margin="normal"
      value={currentPassword}
      onChange={(e) =>
        setCurrentPassword(
          e.target.value
        )
      }
    />

    <TextField
      fullWidth
      type="password"
      label="New Password"
      margin="normal"
      value={newPassword}
      onChange={(e) =>
        setNewPassword(
          e.target.value
        )
      }
    />

    <TextField
      fullWidth
      type="password"
      label="Confirm Password"
      margin="normal"
      value={confirmPassword}
      onChange={(e) =>
        setConfirmPassword(
          e.target.value
        )
      }
    />

    {passwordMessage && (
      <Typography
        sx={{
          mt: 2,
        }}
        color={
          passwordMessage.includes(
            "Successfully"
          )
            ? "success.main"
            : "error.main"
        }
      >
        {passwordMessage}
      </Typography>
    )}
  </DialogContent>

  <DialogActions>
    <Button
      onClick={() => {
        setOpenPasswordDialog(
          false
        );
        setPasswordMessage("");
      }}
    >
      Cancel
    </Button>

    <Button
      variant="contained"
      onClick={
        handlePasswordChange
      }
    >
      Save
    </Button>
  </DialogActions>
</Dialog>
    </>
  );
}

export default SettingsPage;