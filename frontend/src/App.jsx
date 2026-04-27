import { Routes, Route } from 'react-router';
import { useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Home from '../pages/Home.jsx';
import Cart from '../pages/Cart.jsx';
import Contact from '../components/Contact.jsx';
import '../style/App.css';
import CartBar from '../components/CartBar.jsx';
function App() {
  const [search, setSearch] = useState("");
  return (
    <>
    <Navbar setSearch={setSearch} />
    <div className="animate-background"></div>

    <Routes> 
      <Route path='/' element={<Home search={search} />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
      <CartBar />
    </>
  );
}

export default App;

