import { Link } from "react-router-dom";
import "./Navbar.css"; // Asegúrate de que el CSS está importado

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><Link to="/Web-Escolavision/home" className="nav-link">Inicio</Link></li>
        <li><Link to="/Web-Escolavision/about" className="nav-link">Sobre Nosotros</Link></li>
        <li><Link to="/Web-Escolavision/contact" className="nav-link">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;