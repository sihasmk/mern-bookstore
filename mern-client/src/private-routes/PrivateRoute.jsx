import React, { useContext, useRef } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

// Import Flowbite React Components
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const alertRef = useRef(false);

  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  if (!user && location.pathname === "/logout") {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
