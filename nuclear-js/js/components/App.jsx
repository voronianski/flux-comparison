'use strict';

import React from 'react'
import CartContainer from './CartContainer.jsx'
import ProductsContainer from './ProductsContainer.jsx'

export default React.createClass({
    render() {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
});
