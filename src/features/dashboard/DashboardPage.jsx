import { useSelector } from "react-redux";

import {
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import MemoKpiCard from "../../components/MemoKpiCard";
import { useEffect } from "react";
import { getPosts } from "../../services/requestService";


function DashboardPage() {
  useEffect(() => {
  getPosts()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}, []);
  const dashboard = useSelector(
    (state) => state.dashboard
  );

  const cards = [
    {
      title: "Total Requests",
      value: dashboard.totalRequests,
    },
    {
      title: "Pending Requests",
      value: dashboard.pendingRequests,
    },
    {
      title: "Approved Requests",
      value: dashboard.approvedRequests,
    },
    {
      title: "Rejected Requests",
      value: dashboard.rejectedRequests,
    },
    {
      title: "Vendors",
      value: dashboard.vendors,
    },
    {
      title: "Risks",
      value: dashboard.risks,
    },
    {
      title: "Compliance Issues",
      value: dashboard.complianceIssues,
    },
  ];
//  throw new Error("Testing Error Boundary");
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: 3 }}
      >
        Executive Dashboard
      </Typography>

      <Grid container spacing={2}>
        {cards.map((card) => (
          <Grid
            size={{ xs: 12, md: 3 }}
            key={card.title}
          >
            <MemoKpiCard
              title={card.title}
              value={card.value}
            />
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2 }}
      >
        Monthly Procurement Trend
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={dashboard.procurementTrend}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2 }}
      >
        Risk Trend
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={dashboard.riskTrend}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2 }}
      >
        Compliance Trend
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={dashboard.complianceTrend}
        >
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

      <Typography
        variant="h5"
        sx={{ mt: 4, mb: 2 }}
      >
        Department Spending
      </Typography>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart
          data={
            dashboard.departmentSpending
          }
        >
          <XAxis
            dataKey="department"
          />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" />
        </BarChart>
      </ResponsiveContainer>

      <Paper sx={{ p: 2, mt: 4 }}>
        <Typography
          variant="h5"
          sx={{ mb: 2 }}
        >
          Recent Activities
        </Typography>

        <List>
          {dashboard.activities.map(
            (activity, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={activity}
                />
              </ListItem>
            )
          )}
        </List>
      </Paper>
    </>
  );
}

export default DashboardPage;