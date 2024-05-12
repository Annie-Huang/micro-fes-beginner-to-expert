import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

// This sux, this basically need to at least one added into every component that will be used in other app.
// E.g. because <PDPContent> expose to <MainLayout> in Home app. so it needs to have the following line.
import './base.scss';

import { getProductById, currency } from 'home/products';
import placeAddToCart from 'addtocart/placeAddToCart';

const PDPContent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Unfortunately intellij's intellisense cannot detect import from module federation.
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, [id]);

  const addToCart = useRef(null);

  useEffect(() => {
    if (addToCart.current) {
      placeAddToCart(addToCart.current, product.id);
    }
  }, [product]);

  if (!product) return null;
  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className='flex'>
          <h1 className='font-bold text-3xl flex-grow'>{product.name}</h1>
          <div className='font-bold text-3xl flex-end'>
            {currency.format(product.price)}
          </div>
        </div>
        <div ref={addToCart}></div>
        <div className='mt-10'>{product.description}</div>
        <div className='mt-10'>{product.longDescription}</div>
      </div>
    </div>
  );
};

export default PDPContent;
