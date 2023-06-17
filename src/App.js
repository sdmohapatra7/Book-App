import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart';
import './App.css';
import { CartContext } from './context/CartContext';

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className='App'>
      <CartContext.Provider value={cart}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
