// src/components/CartItem.js
import React from 'react';

const CartItem = ({ item, removeFromCart, adjustQuantity }) => {
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => adjustQuantity(item, 1)}>+</button>
      <button onClick={() => adjustQuantity(item, -1)}>-</button>
      <button onClick={() => removeFromCart(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
