// src/App.js
import React, { useState } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const products = [
  { id: 1, name: 'T-Shirt', price: 20 },
  { id: 2, name: 'Jeans', price: 40 },
  { id: 3, name: 'Sneakers', price: 60 },
  { id: 4, name: 'Hat', price: 15 },
  { id: 5, name: 'Socks', price: 5 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(item => item.id === product.id);

    if (index === -1) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      updatedCart[index].quantity += 1;
    }

    setCart(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  const adjustQuantity = (item, change) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex(cartItem => cartItem.id === item.id);

    if (index !== -1) {
      updatedCart[index].quantity += change;
      if (updatedCart[index].quantity <= 0) {
        updatedCart.splice(index, 1);
      }
    }

    setCart(updatedCart);
  };

  return (
    <div className="App">
      <h1>Simple E-Commerce Cart</h1>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} adjustQuantity={adjustQuantity} />
    </div>
  );
}

export default App;
