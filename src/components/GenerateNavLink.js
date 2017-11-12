import React from 'react';
import { NavLink } from 'react-router-dom';

function GenerateNavLink(product) {
  return (
    <div className="box">
      <NavLink to={`/products/${product.handle}`}>
        <img src={product.images[0].src} alt="" />
        <br />
        <b>{product.title.split(' - ')[0]}</b>
      </NavLink>

      <p>
        type: {product.product_type}
        <br />
        options: {product.variants.length}
      </p>
    </div>
  );
}

export default GenerateNavLink;
