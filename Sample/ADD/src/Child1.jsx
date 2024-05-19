import React from 'react';

const Child1 = ({ items, addToCart, decrementFromCart, cart }) => {
  return (
    <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => {
          const cartItem = cart.find(cartItem => cartItem.id === item.id);
          const quantity = cartItem ? cartItem.quantity : 0;
          return (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => addToCart(item)}>Add to Cart</button>
              <button onClick={() => decrementFromCart(item.id)}>Remove from Cart</button>
              <span> Quantity: {quantity} </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Child1;
