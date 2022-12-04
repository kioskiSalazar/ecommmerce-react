import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { consultarBDD } from "../../assets/funciones";
import ItemDetail from "../itemDetail/itemDetail";
const ItemDetailContainer = () => {
const [producto, setproducto] = useState([]);
const {id} = useParams()
useEffect(() => {
   
consultarBDD('../json/productos.json').then(productos => {
    const prod = productos.find(product => product.id === id)
    setproducto(prod)
})
}, []);
    return (
        <div className="card mb-3 container itemDetail"> 
        <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
