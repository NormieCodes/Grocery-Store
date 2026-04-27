import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import '../index.css'
import { CartProvider } from './context/CartContext.jsx'
import ScrollToHash from '../components/ScrollToHash.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <ScrollToHash />
      <App />  
    </BrowserRouter>
  </CartProvider>
);
