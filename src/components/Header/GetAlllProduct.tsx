import React from "react";
import { xmlns } from "../../modules/iconsPath/path";
export interface GettingProductsInterface {
  GettingAllProducts: () => void;
}
const GetAlllProduct: React.FC<GettingProductsInterface> = (props) => {
  return (
    <div
      className="flex justify-end cursor-pointer"
      onClick={props?.GettingAllProducts}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns={xmlns}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </div>
  );
};

export default GetAlllProduct;
