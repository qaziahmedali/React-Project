import React from "react";
import { Cart } from "../../types";
export interface OperationsInterface {
  item: Cart;
  handleAddToCarts: (item: Cart, operation: string) => void;
}
const Operations: React.FC<OperationsInterface> = (props) => {
  return (
    <div className="flex justify-between py-2 ">
      <div className="flex">
        <span
          className="inline-flex w-full justify-center rounded-md border border-none cursor-pointer text-white bg-blue-600 px-4 py-2  text-base font-medium text-white shadow-sm hover: hover:border-none hover:text-white bg-blue-700 sm:w-auto sm:text-sm"
          onClick={() => props.handleAddToCarts(props.item, "decrement")}
        >
          dec
        </span>
        <div className="mx-2 my-1">{props.item?.qty}</div>
        <span
          className="inline-flex w-full justify-center rounded-md border cursor-pointer border-none text-white bg-blue-600 px-4 py-2 text-base font-medium text-white shadow-sm hover: hover:border-none hover:text-white bg-blue-700 sm:w-auto sm:text-sm"
          onClick={() => props.handleAddToCarts(props.item, "increment")}
        >
          inc
        </span>
      </div>
    </div>
  );
};

export default Operations;
