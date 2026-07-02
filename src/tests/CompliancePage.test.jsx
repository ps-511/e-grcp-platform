import { render, screen } from "@testing-library/react";
import CompliancePage from "../features/compliance/CompliancePage";

describe("CompliancePage", () => {
  test("renders compliance center", () => {
    render(<CompliancePage />);

    expect(
      screen.getByText("Compliance Center")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Violations")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Expired Certifications")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Missing Documents")
    ).toBeInTheDocument();
  });

  test("renders compliance monitoring table", () => {
    render(<CompliancePage />);

    expect(
      screen.getByText("Compliance Monitoring")
    ).toBeInTheDocument();

    expect(
      screen.getByText("TechNova Solutions")
    ).toBeInTheDocument();

    expect(
      screen.getByText("CloudAxis Pvt Ltd")
    ).toBeInTheDocument();

    expect(
      screen.getByText("DataSphere Systems")
    ).toBeInTheDocument();
  });
});