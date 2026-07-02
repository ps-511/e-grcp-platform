import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "../routes/ProtectedRoute";

function createStore(isAuthenticated) {
  return configureStore({
    reducer: {
      auth: () => ({
        isAuthenticated,
      }),
    },
  });
}

describe("ProtectedRoute", () => {
  test("renders protected content when authenticated", () => {
    render(
      <Provider store={createStore(true)}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <h1>Dashboard</h1>
                </ProtectedRoute>
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

  test("redirects to login when not authenticated", () => {
    render(
      <Provider store={createStore(false)}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <h1>Dashboard</h1>
                </ProtectedRoute>
              }
            />

            <Route
              path="/login"
              element={<h1>Login Page</h1>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText("Login Page")
    ).toBeInTheDocument();
  });
});