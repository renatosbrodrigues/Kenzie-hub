import { Routes, Route } from "react-router-dom";
import { DashBoard } from "../components/dashboard";
import { Login } from "../components/login";
import { NotFound } from "../components/notFound";
import { Register } from "../components/register";
import RoutesValidation from "../components/RoutesValidation";
const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route element={<RoutesValidation />}>
          <Route path="Dashboard/:name" element={<DashBoard />}></Route>
        </Route>
        <Route path="register" element={<Register />}></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
};

export default RoutesMain;
