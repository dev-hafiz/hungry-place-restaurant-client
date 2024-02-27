import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();

  if (loading || isLoading) {
    return <h1>Loadding...</h1>;
  }

  if (user && user.uid && isAdmin?.admin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} relative />;
};

export default AdminRoute;
