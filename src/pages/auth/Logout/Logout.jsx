import React from "react";
import { Toast, toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthProvider";
import { useUserData } from "../../../contexts/UserDataProvider";

import "./Logout.css";

const Logout = () => {
  const { dispatch } = useUserData();
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("isAuth");
    localStorage.removeItem("token");
    setAuth({ token: "", isAuth: false });
    toast.success("You are logged out successfully!");
    dispatch({ type: "SET_CART", payload: [] });
    dispatch({ type: "SET_WISHLIST", payload: [] });
    navigate("/");
  };

  return (
    <div className="logout-container">
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Logout;
