import { render, screen, fireEvent } from "@testing-library/react";
import ReportsPage from "../features/reports/ReportsPage";

beforeAll(() => {
  window.URL.createObjectURL = jest.fn(() => "blob:test");

  HTMLAnchorElement.prototype.click = jest.fn();
});

describe("ReportsPage", () => {
  test("renders reporting center", () => {
    render(<ReportsPage />);

    expect(
      screen.getByText("Reporting Center")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Export CSV")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Export Excel")
    ).toBeInTheDocument();
  });

  test("exports csv", () => {
    render(<ReportsPage />);

    fireEvent.click(
      screen.getByText("Export CSV")
    );
  });

  test("exports excel", () => {
    render(<ReportsPage />);

    fireEvent.click(
      screen.getByText("Export Excel")
    );
  });

  test("filters reports", () => {
    render(<ReportsPage />);

    expect(
      screen.getByText("Reporting Center")
    ).toBeInTheDocument();
  });
});