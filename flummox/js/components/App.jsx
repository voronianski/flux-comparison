'use strict';

import React from 'react';
import CartContainer from './CartContainer.jsx';
import ProductsContainer from './ProductsContainer.jsx';

let App = React.createClass({

  render() {
    let { flux } = this.props;

    return (
      <div>
        <ProductsContainer flux={flux} />
        <CartContainer flux={flux} />
      </div>
    );
  },

});

export default App;
