import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { CarritoProvider } from './context/carritoContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <CarritoProvider>
    <App />
  </CarritoProvider>
  
);


