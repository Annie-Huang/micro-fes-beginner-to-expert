import React, { useEffect, useState } from 'react';
import { cart } from './cart';

const MiniCart = () => {
  const [items, setItems] = useState(undefined);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    setItems(cart.value?.cartItems);
    return cart.subscribe((c) => {
      setItems(c?.cartItems);
    });
  }, []);

  if (!items) return null;

  // Very similar to <Login> template.
  // The initial 3 items in cart for Sally is coming from cart.controller.ts in server
  return (
    <>
      <span onClick={() => setShowCart(!showCart)} id='showcart_span'>
        <i className='ri-shopping-cart-2-fill text-2xl' id='showcart'></i>
        {items.length}
      </span>
    </>
  );
};

export default MiniCart;
