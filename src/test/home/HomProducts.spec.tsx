import { logRoles, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import HomeProductsDetail from "../../pages/Homes/HomeProductsDetail";
import { Product } from "../../types";

it("List of products are unavailable", async () => {
  renderWithProviders(<HomeProductsDetail />);
  const loader = screen.getByTestId("loader");
  expect(loader).toBeInTheDocument();
});
