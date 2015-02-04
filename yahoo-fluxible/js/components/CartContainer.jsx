'use strict';

var React = require('react/addons');
var Cart = require('../../../common/components/Cart.jsx');
var StoreMixin = require('fluxible').StoreMixin;
var CartStore = require('../stores/CartStore');
var cartCheckout = require('../actions/cartCheckout');

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

var CartContainer = React.createClass({
    mixins: [StoreMixin],

    statics: {
        storeListeners: {
            _onChange: [CartStore]
        }
    },

    _getStateFromStores: function () {
        return {
            products: this.getStore('CartStore').getAddedProducts(),
            total: this.getStore('CartStore').getTotal()
        };
    },

    getInitialState: function () {
        return this._getStateFromStores();
    },

    onCheckoutClicked: function () {
        if (!this.state.products.length) {
            return;
        }
        this.props.context.executeAction(cartCheckout, {
            products: this.state.products
        });
    },

    render: function () {
        return (
            <Cart products={this.state.products} total={this.state.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    },

    _onChange: function () {
        this.setState(this._getStateFromStores());
    }
});

module.exports = CartContainer;
