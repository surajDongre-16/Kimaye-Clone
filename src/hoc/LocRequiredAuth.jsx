import React, { useContext } from "react";
import { LocContext } from "../ContextApi/LocationAuth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const LocRequiredAuth = ({ children }) => {
  const { isTry } = useContext(LocContext);
  const { pathname } = useLocation();
  // console.log(location)
  const navigate = useNavigate();

  if (isTry) {
    return children;
  } else {
    return (
      <div>
        <Navigate to="/Location" state={{ from: pathname }} replace />
      </div>
    );
  }
};

export default LocRequiredAuth;
