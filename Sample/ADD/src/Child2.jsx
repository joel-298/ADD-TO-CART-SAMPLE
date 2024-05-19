import React from 'react';

const Child2 = ({ cart, addToCart, decrementFromCart, removeFromCart }) => {
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => decrementFromCart(item.id)}>-</button>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Child2;
