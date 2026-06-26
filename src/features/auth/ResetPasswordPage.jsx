import {
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import resetPasswordSchema from "./resetPasswordSchema";

function ResetPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      resetPasswordSchema
    ),
  });

  const onSubmit = () => {
    alert(
      "Password reset successful"
    );
  };

  return (
    <Paper
      sx={{
        width: 400,
        margin: "100px auto",
        padding: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2 }}
      >
        Reset Password
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="New Password"
          type="password"
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={
            errors.password?.message
          }
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          {...register(
            "confirmPassword"
          )}
          error={
            !!errors.confirmPassword
          }
          helperText={
            errors.confirmPassword
              ?.message
          }
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Reset Password
        </Button>
      </form>
    </Paper>
  );
}

export default ResetPasswordPage;