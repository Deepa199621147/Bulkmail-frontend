import React, { useState } from "react";
import { NavigationFunctions } from "../utils/NavigationFunctions";
import { AuthFunctions } from "../utils/AuthFunctions";
import { Toaster, toast } from "react-hot-toast";

function SignupComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = NavigationFunctions();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("working this musch");

    const userData = {
      username: name,
      email: email,
      password: password,
    };

    try {
      const response = await fetch("https://bulkmail-backend-qss7.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      const error = data.error;

      if (error) {
        toast.error(error);
      } else {
        const message = data.message;

        toast.success(message);
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };
  return (
    <div>
      <div className="fullScreenContainer">
        <div className="loginform">
          <h1>Signup Form</h1>
          <p>Welcome to Bulk Emailer App</p>
          <form onSubmit={handleSubmit}>
            <div className="inputSection">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Username"
                autoComplete="username"
                required
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                autoComplete="new-password"
                required
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                autoComplete="new-password"
                required
              />

              <div className="buttonSection">
                <button className="secondary" onClick={handleLogin}>
                  Already Have account
                </button>
                <button
                  type="submit"
                  className="primary"
                  onClick={handleSubmit}
                >
                  Signup
                </button>
                <Toaster />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupComponent;
