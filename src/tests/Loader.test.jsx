import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";

describe("Loader", () => {
  test("renders loader", () => {
    render(<Loader />);

    expect(
      screen.getByRole("progressbar")
    ).toBeInTheDocument();
  });
});