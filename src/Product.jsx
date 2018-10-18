import React, { Component } from 'react';
import { Link, Route, Redirect, Switch } from "react-router-dom";
import ProductA from './ProductA';
import ProductB from './ProductB';

class Product extends Component {
  render() {
    const ABC = () => <div>abc</div>;
    return (
      <div>
        Product
        <nav><Link to='/product/proda' >product-a</Link> | <Link to='/product/prodb' >product-b</Link></nav>
        <div style={{padding: '20px 10px', border: '1px solid #f00'}}>
          <Switch>
            <Route
              path='/product/proda'
              render={props => <ProductA {...props} />}
            />
            <Route
              path='/product/prodb'
              render={props => <ProductB {...props} />}
            />
            <Route render={props => <ABC {...props} />}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Product;
