/*
 * @Author: Detcx 
 * @Date: 2018-11-19 14:34:04 
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-11-19 15:29:20
 * @Description: load on demand in using 'react-loadable' plugin configuration
 */

import React from 'react';
import ReactDom from 'react-dom';
import Loadable from 'react-loadable';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

const LoadingComponent = ({ isLoading, error }) => {
  if (isLoading) {
    return <div>Loading...</div>
  }
  else if (error) {
    return <div>Sorry, there was a problem loading the page.</div>
  }
  else {
    return null;
  }
};

const AsyncLogin = Loadable({
  loader: () => import('./components/Login'),
  loading: LoadingComponent
});
const AsyncHome = Loadable({
  loader: () => import('./components/Home'),
  loading: LoadingComponent
});
const AsyncProduct = Loadable({
  loader: () => import('./components/Product'),
  loading: LoadingComponent
});
const AsyncAbout = Loadable({
  loader: () => import('./components/About'),
  loading: LoadingComponent
});


ReactDom.render(
  <BrowserRouter>
    <App>
      <Route exact path="/" component={AsyncHome} />
      <Route path="/login" component={AsyncLogin} />
      <Route path="/product" component={AsyncProduct} />
      <Route path="/about" component={AsyncAbout} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)
