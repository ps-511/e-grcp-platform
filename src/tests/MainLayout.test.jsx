import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "../store/store";

import MainLayout from "../layouts/MainLayout";

describe("MainLayout", () => {
  test("renders child component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <h1>Dashboard Content</h1>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText("Dashboard Content")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/© 2026/i)
    ).toBeInTheDocument();
  });
});