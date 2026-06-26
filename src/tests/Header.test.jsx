import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { describe, test, expect } from "vitest";

import { store } from "../store/store";
import Header from "../layouts/Header";

describe("Header Component", () => {
  test("renders e-GRCP Platform title", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText("e-GRCP Platform")
    ).toBeInTheDocument();
  });
});