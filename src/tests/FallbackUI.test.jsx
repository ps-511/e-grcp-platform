import { render, screen } from "@testing-library/react";
import FallbackUI from "../components/FallbackUI";

describe("FallbackUI", () => {
  test("renders fallback message", () => {
    render(<FallbackUI />);

    expect(
      screen.getByText("Oops!")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Something went wrong/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Reload Application/i,
      })
    ).toBeInTheDocument();
  });
});