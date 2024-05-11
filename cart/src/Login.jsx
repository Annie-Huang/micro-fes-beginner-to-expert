import React, { useState } from 'react';
import { useLoggedIn } from './cart';

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) return null;

  return <div></div>;
};

export default Login;
