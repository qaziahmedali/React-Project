import { useEffect, useState } from "react";
import { RootState } from "../../app/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../reducers/cart/cartSlice";
import { Cart } from "../../types";
import ProductDetail from "./ProductDetail";
import HandleClose from "./HandleRemove";
import ModalFooter from "./ModalFooter";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
const Modal = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state: RootState) => state.cart);
  const handleAddToCarts = (item: Cart, operation: string) => {
    switch (operation) {
      case "increment":
        dispatch(incrementQuantity(item));
        break;
      case "decrement":
        dispatch(decrementQuantity(item));
        break;
      case "remove":
        dispatch(removeItem(item));
        break;
    }
  };
  return (
    <div
      className="relative z-10 flex items-center justify-center h-screen "
      aria-labelledby="exampleModalCenterTitle"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex w-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            {cart.length >= 1 ? (
              cart.map((item: Cart) => (
                <div
                  className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border-b-2"
                  key={item?.id}
                >
                  <HandleClose
                    item={item}
                    handleAddToCarts={handleAddToCarts}
                  />
                  <ProductDetail
                    item={item}
                    handleAddToCarts={handleAddToCarts}
                  />
                </div>
              ))
            ) : (
              <div className="flex justify-center py-4 mx-2">
                There are no records to display
              </div>
            )}
            <ModalFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
