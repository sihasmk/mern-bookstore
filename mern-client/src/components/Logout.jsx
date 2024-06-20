import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        alert("Successfully logged out");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button
        onClick={handleLogOut}
        className="bg-red-500 hover:bg-red-700 rounded-sm text-white font-semibold px-6 py-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
