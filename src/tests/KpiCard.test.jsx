import { render, screen } from "@testing-library/react";
import KpiCard from "../components/KpiCard";

describe("KpiCard", () => {
  test("renders title and value", () => {
    render(
      <KpiCard
        title="Total Vendors"
        value="150"
      />
    );

    expect(
      screen.getByText("Total Vendors")
    ).toBeInTheDocument();

    expect(
      screen.getByText("150")
    ).toBeInTheDocument();
  });
});