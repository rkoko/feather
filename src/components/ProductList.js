import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import GenerateNavLink from './GenerateNavLink';

const BASE_URL = process.env.REACT_APP_API;

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
          {this.state.products.map(product => GenerateNavLink(product))}
        </div>
      </div>
    );
  }
}

export default ProductList;
