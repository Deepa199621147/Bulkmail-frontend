import React, { useEffect } from "react";
import Navbar from "./Navbar";
import SendEmail from "./SendEmail";
import { useNavigate } from "react-router-dom";

function MainScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

      if (!token) {
        navigate("/login");
      }
    };

    checkAuth();
  }, [navigate]);
  return (
    <div className="column">
      <Navbar />
      <SendEmail />
    </div>
  );
}

export default MainScreen;
