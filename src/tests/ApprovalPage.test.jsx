import { render, screen, fireEvent } from "@testing-library/react";
import ApprovalPage from "../features/approval/ApprovalPage";
import "@testing-library/jest-dom";

describe("ApprovalPage", () => {
  test("renders approval workbench", () => {
    render(<ApprovalPage />);

    expect(
      screen.getByText(/Approval Workbench/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Pending Queue/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Approved Queue/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Rejected Queue/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Escalated Queue/i)
    ).toBeInTheDocument();
  });

  test("renders approval table", () => {
    render(<ApprovalPage />);

    expect(
      screen.getByText(/Request/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Department/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Status/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Actions/i)
    ).toBeInTheDocument();
  });

  test("approve button works", () => {
    render(<ApprovalPage />);

    fireEvent.click(
      screen.getAllByText(/Approve/i)[0]
    );

    expect(
      screen.getAllByText(/Approved/i).length
    ).toBeGreaterThan(0);
  });

  test("reject button works", () => {
    render(<ApprovalPage />);

    fireEvent.click(
      screen.getAllByText(/Reject/i)[0]
    );

    expect(
      screen.getAllByText(/Rejected/i).length
    ).toBeGreaterThan(0);
  });

  test("delegate button works", () => {
    render(<ApprovalPage />);

    fireEvent.click(
      screen.getAllByText(/Delegate/i)[0]
    );

    expect(
      screen.getAllByText(/Escalated/i).length
    ).toBeGreaterThan(0);
  });

  test("send back button works", () => {
    render(<ApprovalPage />);

    fireEvent.click(
      screen.getAllByText(/Send Back/i)[0]
    );

    expect(
      screen.getAllByText(/Pending/i).length
    ).toBeGreaterThan(0);
  });

  test("queue filter renders", () => {
    render(<ApprovalPage />);

    expect(
      screen.getByLabelText(/Queue Filter/i)
    ).toBeInTheDocument();
  });
});