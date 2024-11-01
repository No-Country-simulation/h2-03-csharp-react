import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../../hooks/UserContext";

const ProtectedRoutes = () => {
  const { state } = useUserContext();

  if (!state.token) {
    return <Navigate to="/ingresar" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;
