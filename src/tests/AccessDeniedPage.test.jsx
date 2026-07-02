import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import AccessDeniedPage from "../features/auth/AccessDeniedPage";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("AccessDeniedPage", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders access denied page", () => {
    render(
      <MemoryRouter>
        <AccessDeniedPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /Access Denied/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /You do not have permission/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Go Back/i,
      })
    ).toBeInTheDocument();
  });

  test("go back button navigates to dashboard", () => {
    render(
      <MemoryRouter>
        <AccessDeniedPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Go Back/i,
      })
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/dashboard"
    );
  });
});