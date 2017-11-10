import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API;

function generateNavlink(product) {
  return (
    <div className="box">
      <NavLink to={`/products/${product.handle}`}>
        <img src={product.images[0].src} />
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

class ProductList extends Component {
  state = {
    products: []
  };

  componentWillMount() {
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => this.setState({ products: data.products.slice(0, 25) }));
  }

  render() {
    return (
      <div>
        <h4>Product List View</h4>
        <div className="product-list">
          {this.state.products.map(product => generateNavlink(product))}
        </div>
      </div>
    );
  }
}

export default ProductList;
