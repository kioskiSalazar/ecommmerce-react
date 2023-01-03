import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../assets/firebase";
import ItemDetail from "../itemDetail/itemDetail";
import { useDarkModeContext } from "../../context/DarkModeContex";
const ItemDetailContainer = () => {
const [producto, setproducto] = useState([]);
const {id} = useParams()
const {darkMode} = useDarkModeContext()
useEffect(() => {
getProducto(id).then(prod => setproducto(prod))
}, []);
    return (
        <div className={`card mb-3 container itemDetail ${darkMode ? 'text-white bg-secondary' : 'border-light'}`}> 
        <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
