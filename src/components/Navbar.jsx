import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate=useNavigate()
  function logout() {
    localStorage.removeItem("token")
    navigate("/login")

  }
  return (
    <div className="navContainer">
      <div className="navbar">
        <p>Home</p>
        <a href="https://github.com/Deepa199621147" target="_blank" style={{textDecoration:"none"}}>
        <p>Github Repo</p>
        </a> 
        <a href="https://www.linkedin.com/in/deepa-525a1429b/" target="_blank" style={{textDecoration:"none"}}> 
        <p>Linkedin Profile</p>
        </a>
      </div>
      <div onClick={logout} className="userinfo">
        <p>Logout, deepa23</p>
      </div>
    </div>
  );
}

export default Navbar;
