import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import '../index.css'
import { CartProvider } from './context/CartContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <BrowserRouter>
      <ToastProvider>
        <App />  
      </ToastProvider>
    </BrowserRouter>
  </CartProvider>
);
