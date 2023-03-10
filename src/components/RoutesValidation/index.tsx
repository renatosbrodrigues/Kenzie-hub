import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";

const RoutesValidation = () => {
  const location = useLocation();
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <h1>carregando...</h1>;
  } else {
    return user ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace state={{ from: location }}></Navigate>
    );
  }
};

export default RoutesValidation;
