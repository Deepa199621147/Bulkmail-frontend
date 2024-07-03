import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { NavigationFunctions } from "../utils/NavigationFunctions";

function LoginComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { handleSignup } = NavigationFunctions();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token"); // Assuming token is stored in localStorage

      if (token) {
        navigate("/");
      }
    };

    checkAuth();
  }, [navigate]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email:username, password }),
      });

      const data = await response.json();
      const error = data.error;
      if (!error) {
        const token = data.accessToken;
        localStorage.setItem("token", token);
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        };
        navigate("/");
      } else {
        toast.error(error);
      }
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error(error);
    }
  };

  return (
    <div className="fullScreenContainer">
      <div className="loginform">
        <h1>Login Form</h1>
        <p>Welcome to Bulk Emailer App</p>

        <div className="inputSection">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your email address"
            autoComplete="new-username"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            autoComplete="new-password"
          />

          <div className="buttonSection">
            <button className="secondary" onClick={handleSignup}>
              Create New Account
            </button>
            <button className="primary" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
}

export default LoginComponent;
