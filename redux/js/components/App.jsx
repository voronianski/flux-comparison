import React from 'react';
import { connect } from 'react-redux';
import ProductsContainer from './ProductsContainer.jsx';
import CartContainer from './CartContainer.jsx';

class App {
    render() {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
}

export default connect(() => ({}))(App);
