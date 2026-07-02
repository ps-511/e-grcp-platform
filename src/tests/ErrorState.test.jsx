import { render, screen } from "@testing-library/react";
import ErrorState from "../components/ErrorState";

describe("ErrorState", () => {
  test("renders error message", () => {
    render(<ErrorState message="Something went wrong" />);

    expect(
      screen.getByText("Something went wrong")
    ).toBeInTheDocument();
  });
});