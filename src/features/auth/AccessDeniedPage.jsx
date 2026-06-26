import {
  Paper,
  Typography,
  Button,
} from "@mui/material";

import {
  useNavigate,
} from "react-router-dom";

function AccessDeniedPage() {
  const navigate =
    useNavigate();

  return (
    <Paper
      sx={{
        p: 5,
        mt: 5,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h3"
        color="error"
        gutterBottom
      >
        Access Denied
      </Typography>

      <Typography
        variant="h6"
        sx={{ mb: 3 }}
      >
        You do not have permission
        to access this page.
      </Typography>

      <Button
        variant="contained"
        onClick={() =>
          navigate(
            "/dashboard"
          )
        }
      >
        Go Back
      </Button>
    </Paper>
  );
}

export default AccessDeniedPage;