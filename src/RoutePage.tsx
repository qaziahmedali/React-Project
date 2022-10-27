import { Route, Routes } from "react-router-dom";
import ErrorPage from "./modules/Errors/ErrorPage";
import Layout from "./modules/Layout";
import ROUTES from "./Routes";

const RoutePage = () => {
  return (
    <Routes>
      <Route path={ROUTES.BASE} element={<Layout />} />
      <Route path={ROUTES.ERROR.BASE} element={<ErrorPage />} />
    </Routes>
  );
};

export default RoutePage;
