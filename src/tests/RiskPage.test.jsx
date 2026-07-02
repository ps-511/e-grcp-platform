import { render, screen } from "@testing-library/react";
import RiskPage from "../features/risk/RiskPage";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }) => children,
  BarChart: ({ children }) => <div>{children}</div>,
  Bar: () => <div>Bar</div>,
  PieChart: ({ children }) => <div>{children}</div>,
  Pie: ({ children }) => <div>{children}</div>,
  Tooltip: () => <div>Tooltip</div>,
  XAxis: () => <div>XAxis</div>,
  YAxis: () => <div>YAxis</div>,
  Cell: () => <div>Cell</div>,
}));

describe("RiskPage", () => {
  test("renders Risk Center", () => {
    render(<RiskPage />);

    expect(
      screen.getByText("Risk Center")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Total Risks")
    ).toBeInTheDocument();

    expect(
      screen.getByText("High Risks")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Medium Risks")
    ).toBeInTheDocument();
  });

  test("renders all sections", () => {
    render(<RiskPage />);

    expect(
      screen.getByText("Risk Trend")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Risk Distribution")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Risk Matrix")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Risk Heat Map")
    ).toBeInTheDocument();
  });

  test("renders matrix values", () => {
    render(<RiskPage />);

    expect(
      screen.getByText("Critical")
    ).toBeInTheDocument();

    expect(
      screen.getAllByText("Medium").length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText("Low").length
    ).toBeGreaterThan(0);
  });
});