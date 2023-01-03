import './cartwidget.css';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/carritoContex';

const Cartwidget = () => {
  const {getItemQuantity} =useCarritoContext()
  
    return (
    <>
    <div className='navbar-nav cart'>
     
       
        <button className="btn btn-outline-success-info cart" type="submit" ><Link className='link-cart' to={"/cart"}>{getItemQuantity() > 0 && <p>{getItemQuantity()}</p>}🛒</Link></button>
        

      </div>
    </>  
      
      
      );
}

export default Cartwidget;
