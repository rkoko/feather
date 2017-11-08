import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const url = 'https://rentfeather.com';

class Product extends React.Component {
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
    fetch(`https://rentfeather.com${this.state.handle}.json`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          title: data.product.title,
          // body_html: data.product.body_html.split('>')[2].split('<')[0],
          body_html: data.product.body_html,
          imgURL: data.product.image.src,
          variants: data.product.variants,
          price: data.product.variants[0].price,
          product: data
        })
      );
  }

  render() {
    return (
      <div className="product-view">
        <h4>{this.state.title}</h4>
        <br />
        {this.state.body_html}
        <br />
        <img src={this.state.imgURL} />
        <br />
        price: ${this.state.price}
        <br />
        <a target="_blank" href={url + this.state.handle}>
          Buy now
        </a>
      </div>
    );
  }
}
export default Product;
