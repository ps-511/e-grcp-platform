import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../store/store";
import LoginPage from "../features/auth/LoginPage";

describe("Login Component", () => {
  test("renders Login heading", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>
      </Provider>
    );
expect(
  screen.getByRole("heading", {
    name: "Login",
  })
).toBeInTheDocument();
  });
});