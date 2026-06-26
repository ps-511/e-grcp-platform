import {
  Paper,
  Typography,
  Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

function SessionExpiredPage() {
  const navigate = useNavigate();

  return (
    <Paper
      sx={{
        width: 450,
        margin: "120px auto",
        padding: 4,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2 }}
      >
        Session Expired
      </Typography>

      <Typography
        sx={{ mb: 3 }}
      >
        Your session has expired.
        Please login again to
        continue.
      </Typography>

      <Button
        variant="contained"
        onClick={() =>
          navigate("/login")
        }
      >
        Go To Login
      </Button>
    </Paper>
  );
}

export default SessionExpiredPage;