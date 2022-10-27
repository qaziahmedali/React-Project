import Modal from "../Modal/Modal";
import { RootState } from "../../app/store";
import HandleShow from "./HandleShow";
import Dropdown from "./Dropdown";
import { useAppSelector } from "../../app/hooks";
const Header = () => {
  const { modal } = useAppSelector((state: RootState) => state.modal);
  return (
    <div>
      {modal ? <Modal /> : null}
      <nav className="bg-gray-50 w-full top-0 sm:px-4 lg:px-4 sm:py-4 px-4 py-2.5 rounded dark:bg-gray-900 fixed">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="relative md:block ml-5">
            <Dropdown />
          </div>
          <HandleShow />
        </div>
      </nav>
    </div>
  );
};

export default Header;
