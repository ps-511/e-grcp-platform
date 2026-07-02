import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import VendorDetailsPage from "../features/vendors/VendorDetailsPage";

describe("VendorDetailsPage", () => {
  test("renders vendor profile", () => {
    render(
      <MemoryRouter initialEntries={["/vendors/1"]}>
        <Routes>
          <Route
            path="/vendors/:id"
            element={<VendorDetailsPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Vendor Profile")
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Vendor ID/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Vendor Name/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Risk Level/i)
    ).toBeInTheDocument();
  });

  test("shows vendor not found", () => {
    render(
      <MemoryRouter initialEntries={["/vendors/9999"]}>
        <Routes>
          <Route
            path="/vendors/:id"
            element={<VendorDetailsPage />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByText("Vendor Not Found")
    ).toBeInTheDocument();
  });
});