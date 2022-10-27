import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../utils/test-utils";
import Dropdown from "../components/Header/Dropdown";
import userEvent from "@testing-library/user-event";

it("fetches & receives a user after clicking the fetch user button", async () => {
  renderWithProviders(<Dropdown />);
  const select = screen.getByRole("combobox");
  expect(select).toBeInTheDocument();
  expect(screen.getAllByRole("option").length).toBe(4);
  userEvent.selectOptions(
    screen.getByRole("combobox"),
    screen.getByRole("option", { name: "Search by Colour", exact: false })
  );
});
