
import Categorias from "./categorias/categorias";
import Cartwidget from "../cartwidget/cartwidget";
import './navbar.css';
import { Link } from "react-router-dom";
import BotonDarkMode from "./botonDarkMode/BotonDarkMode";
import { useDarkModeContext } from "../../context/DarkModeContex";
const Navbar = () => {
  const {darkMode} = useDarkModeContext()   
  return (

        <nav className={`navbar navbar-expand-lg navbar-dark ${darkMode ? 'bg-primary' : 'bg-dark' }`}>
        <div className="container-fluid">
          <h1 className="navbar-brand" >MUNDO CONSOLAS</h1>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" _msthidden="A" _msthiddenattr={1739517} _mstaria-label={320099}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <button className="nav-link btn btn-dark active" href="#"><font _mstmutation={1} _msthash={622544} _msttexthash={59059}><Link className="home" to={"/"}>Inicio</Link></font>
                </button>
              </li>
              <Categorias/>
            </ul>
            <Cartwidget/>
            <BotonDarkMode/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
