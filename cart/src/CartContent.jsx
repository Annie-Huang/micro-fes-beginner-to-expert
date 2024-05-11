import React, { useEffect, useState } from 'react';

const CartContent = () => {
  const [token, setToken] = useState('');

  useEffect(() => {}, []);
  return <div>JWT: {token}</div>;
};

export default CartContent;
