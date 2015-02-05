'use strict';

import React from 'react';
import Cart from '../../../common/components/Cart.jsx';

let CartContainer = React.createClass({

    getInitialState() {
        this.actions = this.props.flux.getActions('app');
        this.cartStore = this.props.flux.getStore('cart');

        return this.getStateFromStores();
    },

    getStateFromStores() {
        return {
            products: this.cartStore.getProducts(),
            total: this.cartStore.getTotal(),
        }
    },

    componentDidMount() {
        this.cartStore.addListener('change', this.onStoreChange);
    },

    componentWillUnmount() {
        this.cartStore.removeListener('change', this.onStoreChange);
    },

    onStoreChange() {
        this.setState(
            this.getStateFromStores()
        );
    },

    onCheckoutClicked() {
        if (!this.state.products.length) return;

        this.actions.cartCheckout(this.state.products);
    },

    render() {

        return (
            <Cart
                products={this.state.products}
                total={this.state.total}
                onCheckoutClicked={this.onCheckoutClicked}
            />
        );
    },

});

export default CartContainer;
