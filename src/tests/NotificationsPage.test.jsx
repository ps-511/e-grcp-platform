import { act } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotificationsPage from "../features/notifications/NotificationsPage";
import "@testing-library/jest-dom";

jest.useFakeTimers();

jest.mock("../mocks/notifications.json", () => [
  {
    id: 1,
    message: "Vendor Approved",
    priority: "High",
    read: false,
  },
  {
    id: 2,
    message: "Risk Updated",
    priority: "Low",
    read: true,
  },
]);

describe("NotificationsPage", () => {
  test("renders notification page", () => {
    render(<NotificationsPage />);

    expect(
      screen.getByText(/Notification Center/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText("Vendor Approved")
    ).toBeInTheDocument();

    expect(
      screen.getByText("Risk Updated")
    ).toBeInTheDocument();
  });

  test("marks notification as read", () => {
    render(<NotificationsPage />);

    fireEvent.click(
      screen.getByText(/Mark Read/i)
    );

    expect(
      screen.getAllByText(/Read/i)[0]
    ).toBeInTheDocument();
  });

test("adds notification after interval", async () => {
  render(<NotificationsPage />);

  act(() => {
    jest.advanceTimersByTime(15000);
  });

  expect(
    await screen.findByText(
      "New Procurement Request Submitted"
    )
  ).toBeInTheDocument();
}); 

  test("shows KPI cards", () => {
    render(<NotificationsPage />);

    expect(
      screen.getByText(/Total Notifications/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Unread Notifications/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/High Priority Alerts/i)
    ).toBeInTheDocument();
  });
});