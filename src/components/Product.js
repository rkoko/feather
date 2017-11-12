import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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

  componentDidMount() {
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
    return (
      <div>
        <div className="link">
          <NavLink to="/products"> Back to products</NavLink>
        </div>

        <div className="product-view">
          <div className="product-image">
            <img src={this.state.imgURL} alt="" />
          </div>

          <div className="product-details">
            {' '}
            <h3>{this.state.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: this.state.body_html }} />
            {this.state.variants.length !== 1
              ? this.state.variants.map(variant => (
                  <p>
                    {variant.title} - ${variant.price}
                  </p>
                ))
              : null}
            {this.state.variants.length === 1 ? (
              <p>price: ${this.state.price}</p>
            ) : null}
            <a className="btn" target="_blank" href={URL + this.state.handle}>
              Buy now
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Product;
