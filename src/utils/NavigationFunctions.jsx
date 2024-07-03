import { useNavigate } from "react-router-dom";

export const NavigationFunctions = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return { handleSignup, handleLogin };
};
