import {
  Button,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import users from "../../mocks/users.json";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";

import { login } from "../../store/slices/authSlice";

import loginSchema from "./loginSchema";

function LoginPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

const onSubmit = (data) => {
  const user = users.find(
    (u) =>
      u.email === data.email &&
      u.password === data.password
  );

  if (!user) {
    alert(
      "Invalid Email or Password"
    );
    return;
  }

  dispatch(
  login(user)
);

  navigate("/dashboard");
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
        Login
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          fullWidth
          variant="contained"
          type="submit"
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </form>
    </Paper>
  );
}

export default LoginPage;