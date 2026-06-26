import {
  Box,
  Typography,
  Button,
} from "@mui/material";

function FallbackUI() {
  return (
    <Box
      sx={{
        textAlign: "center",
        mt: 10,
      }}
    >
      <Typography
        variant="h3"
        color="error"
      >
        Oops!
      </Typography>

      <Typography
        sx={{ mt: 2 }}
      >
        Something went wrong while
        loading this page.
      </Typography>

      <Button
        sx={{ mt: 3 }}
        variant="contained"
        onClick={() =>
          window.location.reload()
        }
      >
        Reload Application
      </Button>
    </Box>
  );
}

export default FallbackUI;