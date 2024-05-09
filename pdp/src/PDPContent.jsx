import React, { useEffect, useState } from 'react';

import { getProductById, currency } from 'home/products';

const PdpContent = () => {
  const id = 1;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Unfortunately intellij's intellisense cannot detect import from module federation.
      getProductById(id).then(setProduct);
    } else {
      setProduct(null);
    }
  }, []);

  if (!product) return null;
  return <div>Product {product.name}</div>;
};

export default PdpContent;
