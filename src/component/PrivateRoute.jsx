import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../customHook/useAuth";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, isError } = useAuth();

  if (isError || !isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
