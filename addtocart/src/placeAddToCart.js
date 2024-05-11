import { render } from 'solid-js/web';

import AddToCart from './AddToCart';

const placeAddToCart = (el, id) => {
  render(() => <AddToCart id={id} />, el);
};

export default placeAddToCart;
