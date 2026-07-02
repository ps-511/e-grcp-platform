import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar", () => {
  test("renders search input", () => {
    render(
      <SearchBar
        value=""
        onChange={() => {}}
      />
    );

    expect(
      screen.getByLabelText("Search Vendor")
    ).toBeInTheDocument();
  });
});