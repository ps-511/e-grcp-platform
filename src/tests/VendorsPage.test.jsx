import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { BrowserRouter } from "react-router-dom";

import VendorsPage from "../features/vendors/VendorsPage";

jest.mock("../store/slices/vendorSlice", () => ({
  fetchVendors: () => ({
    type: "vendors/fetch",
  }),
}));

function createStore() {
  return configureStore({
    reducer: {
      vendors: () => ({
        loading: false,
        vendors: [
          {
            id: 1,
            name: "ABC Pvt Ltd",
            status: "Active",
            risk: "High",
          },
          {
            id: 2,
            name: "XYZ Ltd",
            status: "Inactive",
            risk: "Low",
          },
        ],
      }),
    },
  });
}

describe("VendorsPage", () => {
  test("renders vendor dashboard", () => {
    render(
      <Provider store={createStore()}>
        <BrowserRouter>
          <VendorsPage />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText("Vendor Governance")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Total Vendors")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Active Vendors")
    ).toBeInTheDocument();

    expect(
      screen.getByText("High Risk Vendors")
    ).toBeInTheDocument();
  });

  test("renders vendor names", () => {
    render(
      <Provider store={createStore()}>
        <BrowserRouter>
          <VendorsPage />
        </BrowserRouter>
      </Provider>
    );

    expect(
      screen.getByText("ABC Pvt Ltd")
    ).toBeInTheDocument();

    expect(
      screen.getByText("XYZ Ltd")
    ).toBeInTheDocument();
  });
});