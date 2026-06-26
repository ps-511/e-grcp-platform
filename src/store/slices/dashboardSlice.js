import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalRequests: 120,

  pendingRequests: 20,

  approvedRequests: 80,

  rejectedRequests: 20,

  vendors: 35,

  risks: 18,

  complianceIssues: 6,

  procurementTrend: [
    { month: "Jan", value: 20 },
    { month: "Feb", value: 35 },
    { month: "Mar", value: 50 },
    { month: "Apr", value: 40 },
  ],

  riskTrend: [
    { month: "Jan", value: 8 },
    { month: "Feb", value: 12 },
    { month: "Mar", value: 10 },
    { month: "Apr", value: 18 },
  ],

  complianceTrend: [
    { month: "Jan", value: 2 },
    { month: "Feb", value: 4 },
    { month: "Mar", value: 3 },
    { month: "Apr", value: 6 },
  ],

  departmentSpending: [
    {
      department: "IT",
      amount: 45000,
    },
    {
      department: "Finance",
      amount: 30000,
    },
    {
      department: "HR",
      amount: 20000,
    },
    {
      department: "Operations",
      amount: 50000,
    },
  ],

  activities: [
    "Vendor onboarding completed",
    "Risk assessment submitted",
    "Compliance document uploaded",
    "Procurement request approved",
  ],
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
});

export default dashboardSlice.reducer;