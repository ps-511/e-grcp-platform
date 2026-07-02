import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import RoleProtectedRoute from "../routes/RoleProtectedRoute";

function createStore(role) {
  return configureStore({
    reducer: {
      auth: () => ({
        user: { role },
      }),
    },
  });
}

describe("RoleProtectedRoute", () => {
  test("renders children when role is allowed", () => {
    render(
      <Provider store={createStore("Administrator")}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <RoleProtectedRoute
                  allowedRoles={["Administrator"]}
                >
                  <h1>Dashboard</h1>
                </RoleProtectedRoute>
              }
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();
  });

  test("redirects to access denied when role is not allowed", () => {
    render(
      <Provider store={createStore("Auditor")}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <RoleProtectedRoute
                  allowedRoles={["Administrator"]}
                >
                  <h1>Dashboard</h1>
                </RoleProtectedRoute>
              }
            />

            <Route
              path="/access-denied"
              element={<h1>Access Denied</h1>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Access Denied")
    ).toBeInTheDocument();
  });
});