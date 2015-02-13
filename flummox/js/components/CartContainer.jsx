'use strict';

import React from 'react';
import FluxMixin from 'flummox/mixin'
import Cart from '../../../common/components/Cart.jsx';

let CartContainer = React.createClass({

    mixins: [FluxMixin({
        cart: store => ({
            products: store.getProducts(),
            total: store.getTotal()
        })
    })],

    onCheckoutClicked() {
        if (!this.state.products.length) {
            return;
        }
        this.flux.getActions('app').cartCheckout(this.state.products);
    },

    render() {
        return (
            <Cart
                products={this.state.products}
                total={this.state.total}
                onCheckoutClicked={this.onCheckoutClicked}
            />
        );
    }
});

export default CartContainer;
