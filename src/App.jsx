import React, { Component } from 'react';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <h4>App</h4>
        <hr />
        <Link to='/home'>Home</Link> | <Link to='/product'>Products</Link> | <Link to='/about'>About</Link>
        <div style={{
            padding: '5px',
            margin: '10px 0',
            minHeight: '300px',
            border: '1px solid #666'
          }}
        >
          { this.props.children }
        </div>
        <footer>footer</footer>
      </div>
    )
  }
}

export default App;
