'use strict';

var React = require('react');
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var ActionCreators = require('../actions/ActionCreators');
var connectStoreMixin = require('react-fluxury').connectStoreMixin;

var CartContainer = React.createClass({

    mixins: [connectStoreMixin(CartStore, (state) => state )],

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
    }
});

module.exports = CartContainer;
