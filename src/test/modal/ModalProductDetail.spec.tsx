import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../utils/test-utils";
import ProductDetail from "../../components/Modal/ProductDetail";
import Modal from "../../components/Modal/Modal";

const modalProductDetailMockData = {
  id: 1,
  name: "zohaib",
  colour: "stone",
  price: 10,
  img: "",
  qty: 1,
  cart: true,
  totalPriceOfProduct: 10,
};

it("modal footer buttons", async () => {
  renderWithProviders(<Modal />);

  const clearButton = screen.getByRole("button", {
    name: "Clear",
    exact: false,
  });
  const checkOutButton = screen.getByRole("button", {
    name: "Cancel",
    exact: false,
  });
  expect(clearButton).toBeInTheDocument();
  expect(checkOutButton).toBeInTheDocument();
});
it("Modal Products are not available", () => {
  renderWithProviders(<Modal />);
  const h2Element = screen.getByText("There are no records to display", {
    exact: false,
  });
  expect(h2Element).toBeInTheDocument();
});
it("List of products in modal are available", async () => {
  renderWithProviders(
    <ProductDetail
      item={modalProductDetailMockData}
      handleAddToCarts={(item, operation) => {}}
    />
  );
  let img;
  await waitFor(() => {
    img = screen.getByAltText("cartImage");
  });
  expect(img).toBeInTheDocument();

  const inc = screen.getByText("inc");
  expect(inc).toBeInTheDocument();

  const dec = screen.getByText("dec");
  expect(dec).toBeInTheDocument();
});
