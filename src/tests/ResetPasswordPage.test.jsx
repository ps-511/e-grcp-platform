import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ForgotPasswordPage from "../features/auth/ResetPasswordPage";
import "@testing-library/jest-dom";

window.alert = jest.fn();

describe("ResetPasswordPage", () => {
  beforeEach(() => {
    window.alert.mockClear();
  });

  test("renders reset password page", () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", {
        name: /Reset Password/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/New Password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(/Confirm Password/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", {
        name: /Reset Password/i,
      })
    ).toBeInTheDocument();
  });

  test("shows validation errors", async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Reset Password/i,
      })
    );

    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
  });

  test("resets password successfully", async () => {
    render(
      <MemoryRouter>
        <ForgotPasswordPage />
      </MemoryRouter>
    );

    fireEvent.change(
      screen.getByLabelText(/New Password/i),
      {
        target: {
          value: "abcdef",
        },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/Confirm Password/i),
      {
        target: {
          value: "abcdef",
        },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /Reset Password/i,
      })
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalledWith(
        "Password reset successful"
      );
    });
  });
});