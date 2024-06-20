import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { useLocation } from "react-router-dom";

// Import Flowbite React Components
import { Spinner } from "flowbite-react";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
    );
  }

  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
