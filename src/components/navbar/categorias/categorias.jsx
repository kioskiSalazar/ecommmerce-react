import React from 'react';

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" _msthash={623272} _msttexthash={300144}>categorias</a>
                <div className="dropdown-menu" _msthidden={4}>
                  <a className="dropdown-item" href="#" _msthash={872430} _msttexthash={76466} _msthidden={1}>Consolas</a>
                  <a className="dropdown-item" href="#" _msthash={872547} _msttexthash={232752} _msthidden={1}>Accesorios</a>
                  <a className="dropdown-item" href="#" _msthash={872664} _msttexthash={349791} _msthidden={1}>TV</a>
                  <div/>
                </div>
              </li>
    );
}

export default Categorias;
