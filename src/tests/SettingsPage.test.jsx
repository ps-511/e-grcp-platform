import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";

import SettingsPage from "../features/settings/SettingsPage";
import authReducer from "../store/slices/authSlice";
import uiReducer from "../store/slices/uiSlice";

import "@testing-library/jest-dom";

function renderPage() {
  const store = configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
    },
    preloadedState: {
      auth: {
        user: {
          name: "Admin",
          email: "admin@egrcp.com",
          role: "Administrator",
          password: "admin123",
        },
        isAuthenticated: true,
      },
      ui: {
        darkMode: false,
        notifications: true,
      },
    },
  });

  render(
    <Provider store={store}>
      <MemoryRouter>
        <SettingsPage />
      </MemoryRouter>
    </Provider>
  );
}

describe("Settings Advanced", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("opens password dialog", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("button", {
        name: /change password/i,
      })
    );

    expect(
      screen.getByRole("heading", {
        name: /change password/i,
      })
    ).toBeInTheDocument();
  });

  test("shows password length validation", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("button", {
        name: /change password/i,
      })
    );

    fireEvent.change(
      screen.getByLabelText(/New Password/i),
      {
        target: { value: "123" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/Confirm Password/i),
      {
        target: { value: "123" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /save/i,
      })
    );

    expect(
      screen.getByText(/Password must be at least 6 characters/i)
    ).toBeInTheDocument();
  });

  test("shows password mismatch", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("button", {
        name: /change password/i,
      })
    );

    fireEvent.change(
      screen.getByLabelText(/New Password/i),
      {
        target: { value: "abcdef" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/Confirm Password/i),
      {
        target: { value: "zzzzzz" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /save/i,
      })
    );

    expect(
      screen.getByText(/Passwords do not match/i)
    ).toBeInTheDocument();
  });

  test("changes password successfully", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("button", {
        name: /change password/i,
      })
    );

    fireEvent.change(
      screen.getByLabelText(/New Password/i),
      {
        target: { value: "abcdef" },
      }
    );

    fireEvent.change(
      screen.getByLabelText(/Confirm Password/i),
      {
        target: { value: "abcdef" },
      }
    );

    fireEvent.click(
      screen.getByRole("button", {
        name: /save/i,
      })
    );

    expect(
      screen.getByText(/Password Changed Successfully/i)
    ).toBeInTheDocument();

    expect(
      localStorage.getItem("password")
    ).toBe("abcdef");
  });

  test("switches theme", () => {
    renderPage();

    fireEvent.mouseDown(
      screen.getByLabelText(/Theme/i)
    );

    fireEvent.click(
      screen.getByText(/Dark/i)
    );

    expect(
      localStorage.getItem("theme")
    ).toBe("dark");
  });

  test("toggles notifications", () => {
    renderPage();

    const notificationSwitch = screen.getByRole("switch", {
      name: /Enable Notifications/i,
    });

    fireEvent.click(notificationSwitch);

    expect(notificationSwitch).not.toBeChecked();
  });

  test("profile information is displayed", () => {
    renderPage();

    expect(
      screen.getByDisplayValue("Admin")
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("admin@egrcp.com")
    ).toBeInTheDocument();

    expect(
      screen.getByDisplayValue("Administrator")
    ).toBeInTheDocument();
  });
});