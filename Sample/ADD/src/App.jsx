import React, { useState } from 'react';
import TransferChild from './TransferChild';
import Child2 from './Child2';

const App = () => {
  const [items] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ]);

  const [cart, setCart] = useState([]);
  const [activeChild, setActiveChild] = useState('child1');

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const decrementFromCart = (itemId) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          return prevCart.map(cartItem =>
            cartItem.id === itemId
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          );
        } else {
          return prevCart.filter(cartItem => cartItem.id !== itemId);
        }
      }
      return prevCart; // Return the unchanged cart if item does not exist
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(cartItem => cartItem.id !== itemId));
  };

  return (
    <div>
      <nav>
        <button onClick={() => setActiveChild('child1')}>Items</button>
        <button onClick={() => setActiveChild('child2')}>Cart</button>
      </nav>
      {activeChild === 'child1' ? (
        <TransferChild
          items={items}
          addToCart={addToCart}
          decrementFromCart={decrementFromCart}
          cart={cart}
        />
      ) : (
        <Child2
          cart={cart}
          addToCart={addToCart}
          decrementFromCart={decrementFromCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default App;
