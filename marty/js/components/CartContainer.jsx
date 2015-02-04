'use strict';

var React = require('react');
var Marty = require('marty');
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var CartActionCreators = require('../actions/cartActionCreators');

var CartState = Marty.createStateMixin({
    listenTo: CartStore,

    getState: function () {
        return {
            products: CartStore.getAddedProducts(),
            total: CartStore.getTotal()
        };
    }
});

var CartContainer = React.createClass({
    mixins: [CartState],

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
          return;
        }
        CartActionCreators.cartCheckout(this.state.products);
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    }
});

module.exports = CartContainer;
