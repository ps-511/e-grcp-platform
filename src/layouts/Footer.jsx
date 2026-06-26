import {
  Box,
  Typography,
} from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        p: 2,
        textAlign:
          "center",
        borderTop:
          "1px solid #ddd",
        mt: 3,
      }}
    >
      <Typography variant="body2">
        © 2026 e-GRCP Platform
      </Typography>
    </Box>
  );
}

export default Footer;