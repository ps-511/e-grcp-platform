import { render, screen } from "@testing-library/react";
import AuditPage from "../features/audit/AuditPage";
import "@testing-library/jest-dom";

describe("AuditPage", () => {
  test("renders audit center", () => {
    render(<AuditPage />);

    expect(
      screen.getByText(/Audit Center/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Audit Reports/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Completed Audits/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Pending Audits/i)
    ).toBeInTheDocument();
  });

  test("renders audit history table", () => {
    render(<AuditPage />);

   expect(
  screen.getByText(
    /User Activities/
  )
).toBeInTheDocument();

 expect(
  screen.getByRole("columnheader", {
    name: /Activity/i,
  })
).toBeInTheDocument();
    expect(
  screen.getByRole("columnheader", { name: "User" })
).toBeInTheDocument();
  expect(
  screen.getByRole("columnheader", {
    name: /^Date$/,
  })
).toBeInTheDocument();

    expect(
      screen.getByText(/Type/i)
    ).toBeInTheDocument();
  });

  test("renders audit records", () => {
    render(<AuditPage />);

    expect(
      screen.getAllByRole("row").length
    ).toBeGreaterThan(1);
  });
});