import { render, screen } from "@testing-library/react";
import Footer from "../layouts/Footer";

describe("Footer Component", () => {
  test("renders footer copyright text", () => {
    render(<Footer />);

    expect(
      screen.getByText(/© 2026 e-GRCP Platform/i)
    ).toBeInTheDocument();
  });
});