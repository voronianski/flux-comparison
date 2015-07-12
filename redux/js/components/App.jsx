import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'redux/react';
import ProductsContainer from './ProductsContainer.jsx';
import CartContainer from './CartContainer.jsx';

@connect(() => ({}))
export default class App {
    render() {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
}
