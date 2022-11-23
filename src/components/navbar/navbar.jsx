import Categorias from "./categorias/categorias";
import Cartwidget from "../cartwidget/cartwidget";
import './navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" _msthash={1864226} _msttexthash={381446}>MUNDO CONSOLAS</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation" _msthidden="A" _msthiddenattr={1739517} _mstaria-label={320099}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#"><font _mstmutation={1} _msthash={622544} _msttexthash={59059}>Hogar</font><span className="visually-hidden" _msthash={913744} _msttexthash={122200}>(current)</span>
                </a>
              </li>
              <Categorias/>
            </ul>
            <Cartwidget/>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;
