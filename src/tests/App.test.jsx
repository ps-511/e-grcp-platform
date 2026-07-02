import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

jest.mock("../layouts/MainLayout", () => ({
  __esModule: true,
  default: ({ children }) => (
    <div data-testid="main-layout">
      {children}
    </div>
  ),
}));

describe("App", () => {
  test("renders MainLayout", () => {
    render(<App />);

    expect(
      screen.getByTestId("main-layout")
    ).toBeInTheDocument();
  });

  test("renders dashboard heading", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /Dashboard/i,
      })
    ).toBeInTheDocument();
  });
});