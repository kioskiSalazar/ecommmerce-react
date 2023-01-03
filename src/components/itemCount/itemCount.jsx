import {useState} from 'react'

const ItemCount = ({inicial,stock, onAdd}) => {
    
    const [contador, setcontador]= useState(inicial);
    const sumar = () => {
        if(contador < stock)
        setcontador(contador+1);    
    } 
    
    const restar = () => {
            if(contador > 1)      
            setcontador(contador-1);
    }
    const agregarAlCarrito = () => onAdd(contador)
    return (
        <div>
            <button className='btn btn-light'onClick={() => sumar()}>➕</button>
            {contador}
            <button className='btn btn-light'onClick={() => restar()}>➖</button>
            <button className='btn btn-light' onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
