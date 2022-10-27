import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../config/baseUrl";
import Api from "../../routes/api";
import { toUpperCase } from "../../utils/utility";
import fetchProducts from "./productsService";
import { ProductItem, Product } from "../../types";

const initialState: ProductItem = {
  loading: false,
  product: [],
  eProduct: [],
};

export const GET_PRODUCTS = createAsyncThunk("getNewOrders", async () => {
  try {
    return await fetchProducts(`${baseUrl}${Api.GET_PRODUCT}`);
  } catch (error) {
    return error;
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    update_product_data: (state, { payload }) => {
      var filterData = state.eProduct.filter(
        (item: Product) => item.colour == toUpperCase(payload.value)
      );

      if (filterData.length > 0) {
        state.product = filterData;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GET_PRODUCTS.pending, (state) => {
        state.loading = true;
      })
      .addCase(GET_PRODUCTS.fulfilled, (state, { payload }: any) => {
        state.loading = false;
        state.product = payload;
        state.eProduct = payload;
      });
  },
});
export const { update_product_data } = productsSlice.actions;

export default productsSlice.reducer;
