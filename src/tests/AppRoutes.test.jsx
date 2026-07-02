import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

jest.mock("../features/dashboard/DashboardPage", () => ({
  __esModule: true,
  default: () => <h1>Executive Dashboard</h1>,
}));

jest.mock("../features/risk/RiskPage", () => ({
  __esModule: true,
  default: () => <h1>Risk Center</h1>,
}));

import AppRoutes from "../routes/AppRoutes";

import authReducer from "../store/slices/authSlice";
import uiReducer from "../store/slices/uiSlice";
import procurementReducer from "../store/slices/procurementSlice";
import vendorReducer from "../store/slices/vendorSlice";
import dashboardReducer from "../store/slices/dashboardSlice";
import reportReducer from "../store/slices/reportSlice";
import riskReducer from "../store/slices/riskSlice";
import complianceReducer from "../store/slices/complianceSlice";
import auditReducer from "../store/slices/auditSlice";
import notificationReducer from "../store/slices/notificationSlice";

import "@testing-library/jest-dom";

function createStore(authenticated = true) {
  return configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
      procurement: procurementReducer,
      vendors: vendorReducer,
      dashboard: dashboardReducer,
      reports: reportReducer,
      risk: riskReducer,
      compliance: complianceReducer,
      audit: auditReducer,
      notifications: notificationReducer,
    },
    preloadedState: {
      auth: {
        isAuthenticated: authenticated,
        user: {
          name: "Admin",
          email: "admin@egrcp.com",
          role: "Administrator",
        },
      },
    },
  });
}

function renderRoute(path, authenticated = true) {
  render(
    <Provider store={createStore(authenticated)}>
      <MemoryRouter initialEntries={[path]}>
        <AppRoutes />
      </MemoryRouter>
    </Provider>
  );
}

describe("AppRoutes", () => {
  test("renders login page", async () => {
    renderRoute("/login", false);

    expect(
      await screen.findByRole("heading", {
        name: /login/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /login/i,
      })
    ).toBeInTheDocument();
  });

  test("renders dashboard", async () => {
    renderRoute("/dashboard");

    expect(
      await screen.findByRole("heading", {
        name: /Executive Dashboard/i,
      })
    ).toBeInTheDocument();
  });

  test("renders vendors", async () => {
    renderRoute("/vendors");

    expect(
      await screen.findByText(/Vendor/i)
    ).toBeInTheDocument();
  });

  test("renders procurement", async () => {
    renderRoute("/procurement");

    expect(
      await screen.findByRole("heading", {
        name: /Procurement Workspace/i,
      })
    ).toBeInTheDocument();
  });

  test("renders reports", async () => {
    renderRoute("/reports");

    expect(
      await screen.findByText(/Reporting/i)
    ).toBeInTheDocument();
  });

  test("renders risk", async () => {
    renderRoute("/risk");

    expect(
      await screen.findByRole("heading", {
        name: /Risk Center/i,
      })
    ).toBeInTheDocument();
  });

  test("renders compliance", async () => {
    renderRoute("/compliance");

    expect(
      await screen.findByText(/Compliance Center/i)
    ).toBeInTheDocument();
  });

  test("renders audit", async () => {
    renderRoute("/audit");

    expect(
      await screen.findByText(/Audit Center/i)
    ).toBeInTheDocument();
  });

  test("renders notifications", async () => {
    renderRoute("/notifications");

    expect(
      await screen.findByText(/Notification Center/i)
    ).toBeInTheDocument();
  });

  test("renders settings", async () => {
    renderRoute("/settings");

    expect(
      await screen.findByText(/User Settings/i)
    ).toBeInTheDocument();
  });
});