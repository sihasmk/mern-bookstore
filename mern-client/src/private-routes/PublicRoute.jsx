import React, { useContext, useRef } from "react";
import { authContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// Import Flowbite React Components
import { Spinner } from "flowbite-react";

const PublicRoute = ({ children }) => {
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

  if (user) {
    if (!alertRef.current) {
      alertRef.current = true;
      alert(`You are already logged in with ${user.email}`);
    }
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default PublicRoute;
