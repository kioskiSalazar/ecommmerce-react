import {useState} from 'react'

const ItemCount = ({stock}) => {
    
    const [contador, setcontador]= useState(1);
    const sumar = () => {
        if(contador < stock)
        setcontador(contador+1);    
    } 
    
    const restar = () => {
            if(contador > 1)
            setcontador(contador-1);
    }

    return (
        <div>
            <button className='btn btn-dark'onClick={() => sumar()}>+</button>
            {contador}
            <button className='btn btn-dark'onClick={() => restar()}>-</button>
            <button className='btn btn-light'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
