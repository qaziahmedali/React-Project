import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import LOGO from "../../modules/imagesUrl/url";
import { showingModal } from "../../reducers/modalSlice";

const HandleShow = () => {
  const dispatch = useAppDispatch();
  const { totalQuanity } = useAppSelector((state: RootState) => state.cart);
  const showModal = () => {
    dispatch(showingModal());
  };
  return (
    <div className="relative cursor-pointer mr-5" onClick={showModal}>
      <img
        alt="add to cart"
        className="object-cover object-center w-10 h-10 block"
        src={LOGO.addToCart}
      />
      <p className="rounded-lg bg-blue-700 text-white text-center w-4 h-4 left-7 text-xs top-0 absolute">
        {totalQuanity}
      </p>
    </div>
  );
};

export default HandleShow;
