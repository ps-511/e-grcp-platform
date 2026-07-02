import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SessionExpiredPage from "../features/auth/SessionExpiredPage";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("SessionExpiredPage", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders session expired page", () => {
    render(
      <MemoryRouter>
        <SessionExpiredPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /Session Expired/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /Your session has expired/i
      )
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Go To Login/i,
      })
    ).toBeInTheDocument();
  });

  test("navigates to login", () => {
    render(
      <MemoryRouter>
        <SessionExpiredPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Go To Login/i,
      })
    );

    expect(mockNavigate).toHaveBeenCalledWith(
      "/login"
    );
  });
});