import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_API;

function generateNavlink(product) {
  return (
    <div>
      <img src={product.images[0].src} />
      <br />
      <NavLink to={`/products/${product.handle}`}>{product.title}</NavLink>
      <ul id="product-type">
        <li key={product.id}>type: {product.product_type}</li>
        <li>options: {product.variants.length}</li>
      </ul>
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
      <div className="product-list">
        <h4>Product List View</h4>
        {this.state.products.map(product => generateNavlink(product))}
      </div>
    );
  }
}

export default ProductList;
