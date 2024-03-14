import { React } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="link-router" to={"/"}>Home</NavLink>
      <NavLink  className="link-router" to={"/About"} >About</NavLink>
      
    </div>
  );
}

export default Navbar;
