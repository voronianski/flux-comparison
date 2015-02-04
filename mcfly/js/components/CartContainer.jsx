'use strict';

var React = require('react');
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var ActionCreators = require('../actions/ActionCreators');

function _getStateFromStores () {
    return {
        products: CartStore.getAddedProducts(),
        total: CartStore.getTotal()
    };
}

var CartContainer = React.createClass({
    mixins: [CartStore.mixin],

    getInitialState: function () {
        return _getStateFromStores();
    },

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
            return;
        }
        ActionCreators.cartCheckout(this.state.products);
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    },

    storeDidChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = CartContainer;
