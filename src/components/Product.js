import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// const url = 'https://rentfeather.com';
const URL = process.env.REACT_APP_API_URL;

class Product extends Component {
  state = {
    handle: this.props.location.pathname,
    title: '',
    body_html: '',
    imgURL: '',
    variants: [],
    price: '',
    externalURL: '',
    product: {}
  };

  componentWillMount() {
    fetch(`${URL}${this.state.handle}.json`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.product.title,
          body_html: data.product.body_html,
          imgURL: data.product.image.src,
          variants: data.product.variants,
          price: data.product.variants[0].price,
          product: data
        })
      );
  }

  render() {
    // debugger;
    return (
      <div className="product-view">
        <h4>{this.state.title}</h4>
        <br />
        <div dangerouslySetInnerHTML={{ __html: this.state.body_html }} />
        <br />
        <img src={this.state.imgURL} />
        <br />
        {this.state.variants.length != 1
          ? this.state.variants.map(variant => (
              <p>
                {variant.title} - {variant.price}
              </p>
            ))
          : null}
        <br />
        {this.state.variants.length === 1 ? (
          <p>price: {this.state.price}</p>
        ) : null}
        <br />
        <a target="_blank" href={URL + this.state.handle}>
          Buy now
        </a>
        <br />
        <NavLink to="/products">Back to products page</NavLink>
      </div>
    );
  }
}
export default Product;
