import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import ProcurementDetailsPage from "../features/procurement/ProcurementDetailsPage";
import "@testing-library/jest-dom";

describe("ProcurementDetailsPage", () => {
  function renderPage(id = "1") {
    render(
      <MemoryRouter initialEntries={[`/procurement/${id}`]}>
        <Routes>
          <Route
            path="/procurement/:id"
            element={<ProcurementDetailsPage />}
          />
        </Routes>
      </MemoryRouter>
    );
  }

  test("renders procurement request", () => {
    renderPage();

    expect(
      screen.getByRole("tab", {
        name: /Overview/i,
      })
    ).toBeInTheDocument();
  });

  test("shows overview tab by default", () => {
    renderPage();

    expect(
      screen.getByText(/Request Overview/i)
    ).toBeInTheDocument();
  });

  test("opens attachments tab", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("tab", {
        name: /Attachments/i,
      })
    );

    expect(
      screen.getByText(/Document\.pdf/i)
    ).toBeInTheDocument();
  });

  test("opens approval history tab", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("tab", {
        name: /Approval History/i,
      })
    );

    expect(
      screen.getByText(/Current Status/i)
    ).toBeInTheDocument();
  });

  test("opens comments tab", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("tab", {
        name: /Comments/i,
      })
    );

    expect(
      screen.getByText(/Review request/i)
    ).toBeInTheDocument();
  });

  test("opens audit logs tab", () => {
    renderPage();

    fireEvent.click(
      screen.getByRole("tab", {
        name: /Audit Logs/i,
      })
    );

    expect(
      screen.getByText(/Request #/i)
    ).toBeInTheDocument();
  });

  test("shows request not found", () => {
    renderPage("99999");

    expect(
      screen.getByText(/Request Not Found/i)
    ).toBeInTheDocument();
  });
});