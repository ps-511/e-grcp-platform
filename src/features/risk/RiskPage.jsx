import {
  Card,
  CardContent,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from "recharts";

import riskData from "../../mocks/riskData.json";

function RiskPage() {
  const totalRisks =
    riskData.reduce(
      (sum, risk) =>
        sum + risk.count,
      0
    );

  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Risk Center
      </Typography>

      <Grid
        container
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>
                Total Risks
              </Typography>

              <Typography variant="h5">
                {totalRisks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>
                High Risks
              </Typography>

              <Typography variant="h5">
                8
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Card>
            <CardContent>
              <Typography>
                Medium Risks
              </Typography>

              <Typography variant="h5">
                15
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Paper
        sx={{ p: 2, mb: 4 }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Risk Trend
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <BarChart
            data={riskData}
          >
            <XAxis
              dataKey="category"
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      <Paper
        sx={{ p: 2, mb: 4 }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Risk Distribution
        </Typography>

        <ResponsiveContainer
          width="100%"
          height={300}
        >
          <PieChart>
            <Pie
              data={riskData}
              dataKey="count"
              nameKey="category"
              outerRadius={100}
            >
              {riskData.map(
                (entry, index) => (
                  <Cell
                    key={index}
                  />
                )
              )}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Paper>

      <Paper
        sx={{ p: 2, mb: 4 }}
      >
        <Typography
          variant="h6"
          sx={{ mb: 2 }}
        >
          Risk Matrix
        </Typography>

        <Typography>
          High Risk - Financial
        </Typography>

        <Typography>
          Medium Risk - Compliance
        </Typography>

        <Typography>
          Low Risk - Operational
        </Typography>
      </Paper>

     <Paper sx={{ p: 2 }}>
  <Typography
    variant="h6"
    sx={{ mb: 2 }}
  >
    Risk Heat Map
  </Typography>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse",
      textAlign: "center",
    }}
  >
    <thead>
      <tr>
        <th></th>
        <th>Low Impact</th>
        <th>Medium Impact</th>
        <th>High Impact</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <strong>
            Low Probability
          </strong>
        </td>

        <td
          style={{
            background: "#4caf50",
            padding: "20px",
          }}
        >
          Low
        </td>

        <td
          style={{
            background: "#8bc34a",
            padding: "20px",
          }}
        >
          Low
        </td>

        <td
          style={{
            background: "#ffeb3b",
            padding: "20px",
          }}
        >
          Medium
        </td>
      </tr>

      <tr>
        <td>
          <strong>
            Medium Probability
          </strong>
        </td>

        <td
          style={{
            background: "#8bc34a",
            padding: "20px",
          }}
        >
          Low
        </td>

        <td
          style={{
            background: "#ffeb3b",
            padding: "20px",
          }}
        >
          Medium
        </td>

        <td
          style={{
            background: "#ff9800",
            padding: "20px",
          }}
        >
          High
        </td>
      </tr>

      <tr>
        <td>
          <strong>
            High Probability
          </strong>
        </td>

        <td
          style={{
            background: "#ffeb3b",
            padding: "20px",
          }}
        >
          Medium
        </td>

        <td
          style={{
            background: "#ff9800",
            padding: "20px",
          }}
        >
          High
        </td>

        <td
          style={{
            background: "#f44336",
            color: "white",
            padding: "20px",
          }}
        >
          Critical
        </td>
      </tr>
    </tbody>
  </table>
</Paper>
    </>
  );
}

export default RiskPage;