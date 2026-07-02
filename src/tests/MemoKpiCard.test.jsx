import { render, screen } from "@testing-library/react";
import MemoKpiCard from "../components/MemoKpiCard";

describe("MemoKpiCard", () => {
  test("renders memo component", () => {
    render(
      <MemoKpiCard
        title="Revenue"
        value="$5000"
      />
    );

    expect(
      screen.getByText("Revenue")
    ).toBeInTheDocument();

    expect(
      screen.getByText("$5000")
    ).toBeInTheDocument();
  });
});