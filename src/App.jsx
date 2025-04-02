import { useState } from 'react';
import Menu from './menu';
import Order from './order';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

//
//
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        if (existingItem.quantity >= 50) return prevCart;
        return prevCart.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem,
            quantity: cartItem.quantity + 1, 
            total: cartItem.total + item.price } : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1,  total: item.price }];
      }
    });
  };

  

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1, total: cartItem.total - cartItem.price }
          : cartItem
      )
    );
  };

  const deleteFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
  };

  return (
    <div className="container">
      <Menu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Order cart={cart} removeFromCart={removeFromCart} addToCart={addToCart} deleteFromCart={deleteFromCart} setCart={setCart} />
    </div>
  );
}

export default App;
