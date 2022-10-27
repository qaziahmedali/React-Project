import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import Loader from "../../modules/Partials/Loader/Loader";
import { addToCart } from "../../reducers/cart/cartSlice";
import { GET_PRODUCTS } from "../../reducers/products/productsSlice";
import { Product } from "../../types";
import ProductsSubDetail from "./ProductsSubDetail";

const HomeProductsDetail = () => {
  const dispatch = useAppDispatch();
  const { loading, product } = useAppSelector(
    (state: RootState) => state.product
  );

  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, []);
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {!loading ? (
        product &&
        product.map((item: Product) => (
          <div
            className="flex justify-center my-5 mx-5"
            key={item?.id}
            data-testid="products"
          >
            <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
              <img
                className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={item?.img}
                alt="product_images"
              />
              <div className="md:p-6 flex flex-col justify-start">
                <ProductsSubDetail
                  item={item}
                  handleAddToCart={handleAddToCart}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomeProductsDetail;
