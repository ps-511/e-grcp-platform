import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ForgotPasswordPage from "../features/auth/ForgotPasswordPage";
import "@testing-library/jest-dom";

window.alert = jest.fn();

describe("ForgotPasswordPage", () => {
  beforeEach(() => {
    window.alert.mockClear();
  });

  test("renders forgot password page", () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /Forgot Password/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Email/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Send Reset Link/i,
      })
    ).toBeInTheDocument();
  });

  test("shows validation error", async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Send Reset Link/i,
      })
    );

    expect(
      await screen.findByText(/Email is required/i)
    ).toBeInTheDocument();
  });

  test("submits valid email", async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByLabelText(/Email/i),
      {
        target: {
          value: "admin@egrcp.com",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Send Reset Link/i,
      })
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Password reset link sent to admin@egrcp.com"
      );
    });
  });
});