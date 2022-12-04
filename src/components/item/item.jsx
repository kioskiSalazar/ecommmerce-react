import { Link } from "react-router-dom";
const Item = ({ producto }) => {
    return (
        <>
            <div className="card border-light mb-3 cardProducto" style={{ width: '18rem' }}>
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className="card-body cardBody">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">{producto.modelo}</p>
                    <p className="card-text">{producto.marca}</p>
                    <p className="card-text">$ {new Intl.NumberFormat(`de-DE`).format(producto.precio)}</p>
                    <button className="btn btn-info"><Link className="nav-link" to={`/producto/${producto.id}`}>Ver producto</Link></button>
                </div>
            </div>
        </>
    );
}

export default Item;
