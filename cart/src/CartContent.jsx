import React, { useEffect, useState } from 'react';

// import { login, jwt } from './cart';
// import Login from './Login';
// import MiniCart from './MiniCart';

import { cart, clearCart } from 'cart/cart';
import { currency } from 'home/products';

const CartContent = () => {
  const [items, setItems] = useState([]);

  // useEffect(
  //   () => cart.subscribe((value) => setItems(value?.cartItems ?? [])),
  //   []
  // );
  useEffect(() => {
    const sub = cart.subscribe((value) => setItems(value?.cartItems ?? []));
    return () => sub.unsubscribe();
  }, []);

  return (
    <>
      <div className='my-10 grid grid-cols-4 gap-5'>
        {items.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className='max-h-6' />
            <div>{item.name}</div>
            <div className='text-right'>
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className='text-right' id='grand_total'>
          {currency.format(items.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      {items.length > 0 && (
        <div className='flex mb-10'>
          <div className='flex-grow'>
            <button
              id='clearcart'
              className='bg-white border border-green-800 text-green-800 py-2 px-5 rounded-md text-sm'
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className='flex-end'>
            <button
              className='bg-green-900 text-white py-2 px-5 rounded-md text-sm'
              onClick={clearCart}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/*const CartContent = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    // Can verify the call is successfully made in the network tab in devtool
    // login('sally', '123');

    // The subscribe function for BehaviorSubject will return a unsubscribe, so perfect to hook it into return in useEffect
    return jwt.subscribe((val) => setToken(val ?? ''));
  }, []);

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />
      <MiniCart />
    </div>
  );
};*/

export default CartContent;
