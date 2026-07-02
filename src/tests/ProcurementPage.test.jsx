import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

import ProcurementPage from "../features/procurement/ProcurementPage";
import procurementReducer from "../store/slices/procurementSlice";

import "@testing-library/jest-dom";

window.URL.createObjectURL = jest.fn();

HTMLAnchorElement.prototype.click = jest.fn();

const store = configureStore({
  reducer: {
    procurement: procurementReducer,
  },
  preloadedState: {
    procurement: {
     requests: [
  {
    id: 1,
    title: "Laptop Procurement",
    department: "IT",
    status: "Pending",
    amount: 50000,
  },
  {
    id: 2,
    title: "Software License Renewal",
    department: "Finance",
    status: "Approved",
    amount: 25000,
  },
],
      loading: false,
    },
  },
});

describe("ProcurementPage", () => {
  test("renders procurement workspace", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProcurementPage />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByText(/Procurement Workspace/i)
    ).toBeInTheDocument();
  });

 test("renders procurement requests", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <ProcurementPage />
      </MemoryRouter>
    </Provider>
  );

  expect(
    screen.getByText("Laptop Procurement")
  ).toBeInTheDocument();

  expect(
    screen.getByText("Software License Renewal")
  ).toBeInTheDocument();
});
  test("search input works", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProcurementPage />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.change(
      screen.getByLabelText(/Search Request/i),
      {
        target: {
          value: "Laptop",
        },
      }
    );

    expect(
      screen.getByDisplayValue("Laptop")
    ).toBeInTheDocument();
  });

  test("export csv button works", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProcurementPage />
        </MemoryRouter>
      </Provider>
    );

    fireEvent.click(
      screen.getByText(/Export CSV/i)
    );
  });

  test("status filter renders", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProcurementPage />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByLabelText(/Status/i)
    ).toBeInTheDocument();
  });

  test("sort filter renders", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <ProcurementPage />
        </MemoryRouter>
      </Provider>
    );

    expect(
      screen.getByLabelText(/Sort Amount/i)
    ).toBeInTheDocument();
  });
});