
import React, { Component } from 'react';
import Request from 'superagent';
import BoxContainer from '../container/box-container.js';

class Products extends Component {
  render() {
    return (
        
           <div className="container-fluid">
            <BoxContainer/>
           </div>
        
    );
  }
}

export default Products;
