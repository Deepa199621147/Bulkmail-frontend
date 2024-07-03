import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:8000";

export const AuthFunctions = () => {
  const submitSignup = async (username, email, password) => {
    try {
      const userData = {
        username,
        email,
        password,
      };

      const response = await axios.post(`${API_URL}/users/register`, userData);
      return response.data;
    } catch (error) {
      console.error(error);
      toast.error(error);
    }
  };

  return { submitSignup };
};
