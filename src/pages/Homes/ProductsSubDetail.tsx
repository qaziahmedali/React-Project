import React from "react";
import { Product } from "../../types";
export interface SubProductDetailInterface {
  item: Product;
  handleAddToCart: (item: Product) => void;
}
const ProductsSubDetail: React.FC<SubProductDetailInterface> = (props) => {
  return (
    <div className="px-5">
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">
          Special title
        </h5>
        <p className="text-gray-700 text-base mb-4">{props?.item?.name} </p>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => props.handleAddToCart(props?.item)}
        >
          Add to cart
        </button>
      </div>
      <div className="py-3 px-6 border-t border-gray-300 text-gray-600 flex items-center justify-between">
        <p className="rounded-lg text-1xl text-center w-4 h-4 left-7 text-xs cursor-pointer">
          {props?.item?.colour}
        </p>
        <p className="text-blue-500">${props?.item?.price}</p>
      </div>
    </div>
  );
};

export default ProductsSubDetail;
