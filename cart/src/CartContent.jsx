import React, { useEffect, useState } from 'react';

import { login, jwt } from './cart';
import Login from './Login';
import MiniCart from './MiniCart';

const CartContent = () => {
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
};

export default CartContent;
