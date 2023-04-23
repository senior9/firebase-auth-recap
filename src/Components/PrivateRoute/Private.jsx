import React, { useContext } from "react";
import { authProvider } from "../Provider/UserProvider";
import { Navigate } from "react-router";

const Private = ({ children }) => {
  const { user, loading } = useContext(authProvider);
  if (loading) {
    return (
      <progress
        className="progress progress-secondary w-56"
        value="100"
        max="100"
      ></progress>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace={true}></Navigate>;
};

export default Private;
