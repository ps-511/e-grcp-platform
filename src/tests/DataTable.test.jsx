import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import DataTable from "../components/DataTable";

describe("DataTable", () => {
  const rows = [
    {
      id: 1,
      name: "ABC Pvt Ltd",
      risk: "High",
    },
  ];

  test("renders vendor data", () => {
    render(
      <BrowserRouter>
        <DataTable rows={rows} />
      </BrowserRouter>
    );

    expect(screen.getByText("Vendor Name")).toBeInTheDocument();
    expect(screen.getByText("ABC Pvt Ltd")).toBeInTheDocument();
    expect(screen.getByText("High")).toBeInTheDocument();
  });
});