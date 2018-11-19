/*
 * @Author: Detcx 
 * @Date: 2018-11-19 15:05:58 
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-11-19 15:14:59
 * @Description: original configuration
 */
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';
import Home from './components/Home';
import Product from './components/Product';
import About from './components/About';
import Login from './components/Login';


ReactDom.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)

