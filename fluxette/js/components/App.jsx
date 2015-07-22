import React from 'react';
import ProductsContainer from './ProductsContainer.jsx';
import CartContainer from './CartContainer.jsx';

export default class extends React.Component {
    render() {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
}
