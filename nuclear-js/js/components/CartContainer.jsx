import React from 'react'

import Cart from '../../../common/components/Cart.jsx';
import reactor from '../reactor';
import getters from '../getters';
import actions from '../actions';

export default React.createClass({
    mixins: [reactor.ReactMixin],

    getDataBindings() {
        return {
            products: getters.cartProducts,
            total: getters.cartTotal,
        }
    },

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
            return;
        }
        actions.cartCheckout();
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    },
});
