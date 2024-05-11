import React from 'react';

// This sux, this basically need to add into every component, if your pdp's <App> have two components, <Header> and <Footer>, then at least one of them need to have this.
// So it's just safe to add it to component that will be expose to other apps.
import './base.scss';

import MiniCart from 'cart/MiniCart';
import Login from 'cart/Login';

export default function Header() {
  return (
    <div className='p-5 bg-blue-500 text-white text-3xl font-bold'>
      <div className='flex'>
        <div className='flex-grow flex'>Fidget Spinner World</div>
        <div className='flex-end relative'>
          <MiniCart />
          <Login />
        </div>
      </div>
    </div>
  );
}
