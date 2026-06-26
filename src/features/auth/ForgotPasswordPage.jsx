import {
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import forgotPasswordSchema from "./forgotPasswordSchema";

function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      forgotPasswordSchema
    ),
  });

  const onSubmit = (data) => {
    alert(
      `Password reset link sent to ${data.email}`
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
        Forgot Password
      </Typography>

      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={
            errors.email?.message
          }
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Send Reset Link
        </Button>
      </form>
    </Paper>
  );
}

export default ForgotPasswordPage;