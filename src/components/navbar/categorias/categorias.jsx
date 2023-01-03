import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown categ">
                <button className="navbar-Brand btn btn-dark active dropdown-toggle cat" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" _msthash={623272} _msttexthash={300144}>categorias</button>
                <div className="dropdown-menu" _msthidden={4}>
                  <button className="dropdown-item" href="#" _msthash={872430} _msttexthash={76466} _msthidden={1}><Link className="dropdown-item categ" to={"/category/consolas"}>Consolas</Link></button>
                  <button className="dropdown-item categ" href="#" _msthash={872547} _msttexthash={232752} _msthidden={1}><Link className="dropdown-item categ" to={"/category/accesorios"}>Accesorios</Link></button>
                  <button className="dropdown-item categ" href="#" _msthash={872664} _msttexthash={349791} _msthidden={1}><Link className="dropdown-item categ" to={"/category/juegos"}>Juegos</Link></button>
                  <div/>
                </div>
              </li>
    );
}

export default Categorias;
