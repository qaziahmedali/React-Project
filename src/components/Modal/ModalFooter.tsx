import { useDispatch } from "react-redux";
import { clear } from "../../reducers/cart/cartSlice";
import { closingModal } from "../../reducers/modalSlice";

const ModalFooter = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closingModal());
  };
  const Clear = () => {
    dispatch(clear());
    dispatch(closingModal());
  };
  return (
    <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 my-2 text-base font-medium text-white shadow-sm hover:bg-blue-700 hover:border-none  hover:text-white sm:ml-3 sm:w-auto sm:text-sm"
        onClick={Clear}
      >
        Clear
      </button>
      <button
        type="button"
        className="inline-flex w-full justify-center rounded-md border border-black text-black px-4 py-2 my-2 text-base font-medium text-white shadow-sm hover:bg-blue-200 hover:border-none hover:text-black sm:ml-3 sm:w-auto sm:text-sm"
        onClick={handleClose}
      >
        Cancel
      </button>
    </div>
  );
};

export default ModalFooter;
