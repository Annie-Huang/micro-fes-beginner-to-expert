import { createEffect, createSignal, Show } from 'solid-js';

// This sux, this basically need to at least one added into every component that will be used in other app.
// E.g. because <AddToCart> expose to <PDPContent> in App. so it needs to have the following line.
import './base.scss';

import { jwt, addToCart } from 'cart/cart';

export default ({ id }) => {
  const [loggedIn, setLoggedIn] = createSignal(false);

  createEffect(() => {
    return jwt.subscribe((jwt) => {
      setLoggedIn(!!jwt);
    });
  });

  return (
    <Show when={loggedIn()}>
      <button
        onClick={() => addToCart(id)}
        class='bg-red-900 text-white py-2 px-5 rounded-md text-sm mt-5'
      >
        Add To Cart
      </button>
    </Show>
  );
};
