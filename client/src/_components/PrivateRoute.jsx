import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PrivateRoute() {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);

  // Check if user is logged in and the current route is not the models page
  if (!userInfo && location.pathname === "/models") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
