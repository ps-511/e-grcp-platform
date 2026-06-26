import { Paper, Typography } from "@mui/material";

function KpiCard({ title, value }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography>{title}</Typography>

      <Typography variant="h5">
        {value}
      </Typography>
    </Paper>
  );
}

export default KpiCard;