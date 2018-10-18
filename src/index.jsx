import React, { PureComponent } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';
import Home from './Home';
import Product from './Product';
import About from './About';


const getAsyncComponent = (load) => (
  class AsyncComponent extends PureComponent {
    componentDidMount() {
      load().then(({default: component}) => {
        this.setState({
          component
        })
      })
    }
    render() {
      const {component} = this.state || {};
      return component ? React.createElement(component): null;
    }
  }
)

ReactDom.render(
  <Router >
    <App>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/product" component={Product} />
      <Route path="/about" component={About} />
    </App>
  </Router>,
  document.getElementById('root')
)

/* 
// 懒加载
ReactDom.render(
  <Router >
    <App>
      <Route exact path="/" component={getAsyncComponent(() => import( './Home'))} />
      <Route path="/home" component={getAsyncComponent(() => import( './Home'))} />
      <Route path="/product" component={getAsyncComponent(() => import( './Product'))} />
      <Route path="/about" component={getAsyncComponent(() => import( './About'))} />
    </App>
  </Router>,
  document.getElementById('root')
)
 */
/* webpackChunkName: 'chunk-home', webpackMode: 'lazy-once' */
/* webpackChunkName: 'chunk-home' */
/* webpackChunkName: 'chunk-product' */
/* webpackChunkName: 'chunk-about' */