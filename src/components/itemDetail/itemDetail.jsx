import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import { useDarkModeContext } from "../../context/DarkModeContex";
import { useCarritoContext } from "../../context/carritoContex";
const ItemDetail = ({item}) => {
    const {darkMode} = useDarkModeContext()
const {addItem} = useCarritoContext()

const onAdd = (contador) => {
addItem(item, contador)
} 

    return (
        <div className="row g-0">
            <div className="col-md-4">
<img src={item.img} alt="" className="img-fluid rounded-start" />
            </div>
          <div className="col-md-8">
            <div className={`card-body ${darkMode ? 'cardBodyDark' : 'cardBody' } `}>
<h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">Modelo:{item.modelo}</p>
            <p className="card-text">Marca:{item.marca}</p>
            <p className="card-text">Precio:{item.precio}</p>
            <p className="card-text">Stock:{item.stock}</p>
            <ItemCount inicial = {1} stock={item.stock} onAdd ={onAdd}/>
            <button className="btn btn-dark"><Link to="/cart" className="btn btn-dark">Finalizar compra</Link></button>
            </div>  
            </div>
        </div>
    );
}

export default ItemDetail;
