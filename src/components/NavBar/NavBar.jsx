import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/img/logo-blanco.png";
import "./NavBar.css";

// import CartWidget from "../index";

const NavBar = () => {
  return (
    <nav className="navbar backStyle">
      <div className="logo">
        <a href="">
          <img src={logo} className="logo-img" alt="Logo de la empresa"></img>
        </a>
      </div>
      <div className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="">Inicio</a>
          </li>
          <li className="nav-item"> 
            <a href="">Aberturas</a>
          </li>
          <li className="nav-item">
            <a href="">Deco</a>
          </li>
          <li className="nav-item">
            <a href="">Nosotros</a>
          </li>
        </ul>
      </div>
      <a href="">
        <CartWidget />
      </a>
    </nav>
  );
};

export default NavBar;
