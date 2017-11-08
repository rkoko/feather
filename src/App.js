import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Product from './components/Product';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
        <Router history={history}>
          <Switch>
            <Route path="/products/:id" component={Product} />
            <Route path="/products" component={ProductList} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
