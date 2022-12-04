
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from './navbar/navbar';
import ItemListContainer from './itemListContainer/itemListContainer';
import ItemDetailContainer from './itemDetailContainer/itemDetailContainer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/producto/:id' element={<ItemDetailContainer/>}/>
          <Route path='category/:category' element={<ItemListContainer/>}/>
          <Route path='' element={<h1>cart</h1>}/>

        </Routes>
      </BrowserRouter>

    </>


  );
}

export default App;

