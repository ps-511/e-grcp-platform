import { render, screen } from "@testing-library/react";
import ErrorBoundary from "../components/ErrorBoundary";

function BuggyComponent() {
  throw new Error("Crash");
}

describe("ErrorBoundary", () => {
  test("renders fallback UI on error", () => {
    const spy = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    );

    expect(
      screen.getByText("Oops!")
    ).toBeInTheDocument();

    spy.mockRestore();
  });
});