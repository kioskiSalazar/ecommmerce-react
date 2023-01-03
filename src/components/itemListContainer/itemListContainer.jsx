import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/itemList";
import {getProductos, getProducto, updateProducto, deleteProducto} from "../../assets/firebase";
const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]);
    const { category } = useParams()


    useEffect(() => {

if(category){
getProductos().then(products => {
            const productList= products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === category) 
            const cardProduct = ItemList({ productList })
            setProductos(cardProduct)
           })

}else{
    getProductos().then(products => {
        const productList= products.filter(prod => prod.stock > 0) 
        const cardProduct = ItemList({ productList })
        setProductos(cardProduct)
       })

}


    }, [category]);
    return (
        <div className='row align-items-start cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
