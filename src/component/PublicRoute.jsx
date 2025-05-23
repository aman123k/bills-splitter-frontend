import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../customHook/useAuth";

const PublicRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
