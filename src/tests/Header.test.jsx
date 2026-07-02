import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter } from "react-router-dom";
import Header from "../layouts/Header";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const authReducer = (
  state = {
    isAuthenticated: true,
    user: {
      name: "Admin",
      role: "Administrator",
    },
  }
) => state;

const uiReducer = (
  state = {
    darkMode: false,
  }
) => state;

const notificationReducer = (
  state = {
    items: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
    ],
  }
) => state;

function createStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      ui: uiReducer,
      notifications: notificationReducer,
    },
  });
}

function renderHeader() {
  render(
    <Provider store={createStore()}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
}

describe("Header", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test("renders platform title", () => {
    renderHeader();

    expect(
      screen.getByText(/e-GRCP Platform/i)
    ).toBeInTheDocument();
  });

  test("shows logged in user", () => {
    renderHeader();

    expect(
      screen.getByText("Admin")
    ).toBeInTheDocument();
  });

  test("shows notification badge", () => {
    renderHeader();

    expect(
      screen.getByText("3")
    ).toBeInTheDocument();
  });

  test("renders search box", () => {
    renderHeader();

    expect(
      screen.getByPlaceholderText(/Global Search/i)
    ).toBeInTheDocument();
  });

  test("dark mode switch renders", () => {
    renderHeader();

    expect(
      screen.getByRole("switch")
    ).toBeInTheDocument();
  });

  test("toggles dark mode switch", () => {
    renderHeader();

    fireEvent.click(
      screen.getByRole("switch")
    );

    expect(
      screen.getByRole("switch")
    ).toBeInTheDocument();
  });

  test("logout button renders", () => {
    renderHeader();

    expect(
      screen.getByRole("button", {
        name: /Logout/i,
      })
    ).toBeInTheDocument();
  });

  test("logout navigates to login", () => {
    renderHeader();

    fireEvent.click(
      screen.getByRole("button", {
        name: /Logout/i,
      })
    );

    expect(mockNavigate).toHaveBeenCalledWith("/login");
  });

  test("dashboard search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "dashboard",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/dashboard");
  });

  test("vendors search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "vendors",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/vendors");
  });

  test("procurement search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "procurement",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/procurement");
  });

  test("risk search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "risk",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/risk");
  });

  test("compliance search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "compliance",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/compliance");
  });

  test("audit search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "audit",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/audit");
  });

  test("reports search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "reports",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/reports");
  });

  test("approval search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "approval",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/approval");
  });

  test("notifications search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "notifications",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/notifications");
  });

  test("settings search works", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "settings",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/settings");
  });

  test("enter with unknown text does not navigate", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "xyz",
      },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test("pressing non-enter key does nothing", () => {
    renderHeader();

    const input =
      screen.getByPlaceholderText(/Global Search/i);

    fireEvent.change(input, {
      target: {
        value: "dashboard",
      },
    });

    fireEvent.keyDown(input, {
      key: "a",
      code: "KeyA",
    });

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});