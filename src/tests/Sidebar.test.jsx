import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { configureStore } from "@reduxjs/toolkit";

import Sidebar from "../layouts/Sidebar";

const createStore = () =>
  configureStore({
    reducer: {
      auth: () => ({
        user: {
          role: "Administrator",
        },
      }),
    },
  });

describe("Sidebar", () => {
  test("shows administrator menu", () => {
    render(
      <Provider store={createStore()}>
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText("Dashboard")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Risk")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Reports")
    ).toBeInTheDocument();
  });
});