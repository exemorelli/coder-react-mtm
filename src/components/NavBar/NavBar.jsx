import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/img/logo-blanco.png";
import "./NavBar.css";
import { NavLink } from "react-router-dom";


// import CartWidget from "../index";

const NavBar = () => {
  return (
    <nav className="navbar backStyle">
      <div className="logo">
        <NavLink to={"/"}>
          <img src={logo} className="logo-img" alt="Logo de la empresa"></img>
        </NavLink>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink to={"/"}>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/products"}>Productos</NavLink>
          </li>
          {/* Aberturas */}
          {/* Deco */}
          <li className="nav-item">
            <NavLink to={"/category/electronics"}>electronics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to={"/category/jewelery"}>jewelery</NavLink>
          </li>
        </ul>
      </div>
      {/* <a href="">
        <CartWidget />
      </a> */}
      <NavLink to={"/cart"}><CartWidget /></NavLink>

    </nav>
  );
};

export default NavBar;
