// src/components/Cart.js
import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cart, removeFromCart, adjustQuantity }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            adjustQuantity={adjustQuantity}
          />
        ))
      )}
      <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
