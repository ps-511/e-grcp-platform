import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import LoginPage from "../features/auth/LoginPage";
import authReducer from "../store/slices/authSlice";
import uiReducer from "../store/slices/uiSlice";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

window.alert = jest.fn();

function renderLogin() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    </Provider>
  );
}

describe("LoginPage", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    window.alert.mockClear();
  });

  test("renders login heading", async () => {
    renderLogin();

    expect(
      await screen.findByRole("heading", {
        name: /Login/i,
      })
    ).toBeInTheDocument();
  });

  test("renders email field", () => {
    renderLogin();

    expect(
      screen.getByLabelText(/Email/i)
    ).toBeInTheDocument();
  });

  test("renders password field", () => {
    renderLogin();

    expect(
      screen.getByLabelText(/Password/i)
    ).toBeInTheDocument();
  });

  test("renders login button", () => {
    renderLogin();

    expect(
      screen.getByRole("button", {
        name: /Login/i,
      })
    ).toBeInTheDocument();
  });

  test("shows validation errors", async () => {
    renderLogin();

    fireEvent.click(
      screen.getByRole("button", {
        name: /Login/i,
      })
    );

    expect(
      await screen.findByText(/Email is required/i)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(/Password is required/i)
    ).toBeInTheDocument();
  });

  test("shows invalid credentials alert", async () => {
    renderLogin();

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "abc@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /Login/i,
      })
    );

    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });

  test("logs in successfully", async () => {
    renderLogin();

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: "admin@egrcp.com" },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: "admin123" },
    });

    fireEvent.click(
      screen.getByRole("button", {
        name: /Login/i,
      })
    );

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
    });
  });
});