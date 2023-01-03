
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
// router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// context
import { DarkModeProvide } from '../context/DarkModeContex';
// toastify
import { ToastContainer } from 'react-toastify';
// Componentes
import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/itemListContainer';
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';
import Cart from './cart/cart';
import Checkout from './checkout/checkout';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <DarkModeProvide>
        <Navbar/>
         <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          <Route path='category/:category' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
         </Routes>
         <ToastContainer/>
      </DarkModeProvide>
       
      </BrowserRouter>

    </>


  );
}

export default App;

