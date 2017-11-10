import React, { Component } from 'react';
import './Assets/App.css';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PropTypes from 'prop-types';

const history = createBrowserHistory();

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  render() {
    return (
      <div className="app">
        <header>
          <a href="/products">
            <div className="logo" />
          </a>
        </header>
        <Router history={history}>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route path="/products" component={ProductList} />
            <Route exact path="/" render={() => <Redirect to="/products" />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
