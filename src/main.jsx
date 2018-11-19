/*
 * @Author: Detcx 
 * @Date: 2018-11-19 15:02:48 
 * @Last Modified by: Detcx
 * @Last Modified time: 2018-11-19 15:30:11
 * @Description: load on demand in using webpack configuration, dependence on '@babel/plugin-syntax-dynamic-import' plugin
 */

import React, { PureComponent, createElement } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './components/App';

/**
 * 
 * @param load 组件加载函数， load 函数会返回一个 Promise，在文件加载完成时 resolve
 * @returns { AsyncComponent } 返回一个高级组件用于封装需要异步加载的组件
 */
const getAsyncComponent = (load) => (
  class AsyncComponent extends PureComponent {
    componentDidMount() {
      load().then(({default: component}) => {
        console.log('loaded');
        this.setState({component});
      })
    }
    render() {
      const { component } = this.state || {};
      return component ? createElement(component) : null;
    }
  }
)


ReactDom.render(
  <BrowserRouter>
    <App>
      <Route path="/" exact component={getAsyncComponent(() => import(/* webpackChunkName: 'chunk-home' */ './components/Home'))} />
      <Route path="/product" component={getAsyncComponent(() => import(/* webpackChunkName: 'chunk-product' */ './components/Product'))} />
      <Route path="/about" component={getAsyncComponent(() => import(/* webpackChunkName: 'chunk-about' */ './components/About'))} />
      <Route path="/login" component={getAsyncComponent(() => import(/* webpackChunkName: 'chunk-login' */ './components/Login'))} />
    </App>
  </BrowserRouter>,
  document.getElementById('root')
)
