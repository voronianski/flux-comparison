import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer.jsx';
import CartContainer from './CartContainer.jsx';

export default class App extends Component {
    render() {
        const { connectedActionSets } = this.props;
        return (
            <div>
                <ProductsContainer connectedActionSets={connectedActionSets} />
                <CartContainer connectedActionSets={connectedActionSets} />
            </div>
        );
    }
}
