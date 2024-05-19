import React from 'react';
import Child1 from './Child1';

const TransferChild = ({ items, addToCart, decrementFromCart, cart }) => {
  return (
    <Child1
      items={items}
      addToCart={addToCart}
      decrementFromCart={decrementFromCart}
      cart={cart}
    />
  );
};

export default TransferChild;
