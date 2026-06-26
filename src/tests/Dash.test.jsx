import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import DashboardPage from "../features/dashboard/DashboardPage";

describe("Dashboard Component", () => {
  test("renders Executive Dashboard heading", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DashboardPage />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText("Executive Dashboard")
    ).toBeInTheDocument();
  });
});