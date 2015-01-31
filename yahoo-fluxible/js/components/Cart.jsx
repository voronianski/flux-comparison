'use strict';

var React = require('react/addons');
var StoreMixin = require('fluxible').StoreMixin;
var CartStore = require('../stores/CartStore');
var cartCheckout = require('../actions/cartCheckout');

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

var Cart = React.createClass({
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

    checkout: function () {
        if (!this.state.products.length) {
            return;
        }
        this.props.context.executeAction(cartCheckout, {
            products: this.state.products
        });
    },

    render: function () {
        var products = this.state.products;

        var hasProducts = products.length > 0;
        var nodes = !hasProducts ?
            <div>Please add some products to cart.</div> :
            products.map(function (p) {
                return <Product key={p.id}>{p.title} - &euro;{p.price} x {p.quantity}</Product>;
            });

        return (
            <div className="cart uk-panel uk-panel-box uk-panel-box-primary">
                <div className="uk-badge uk-margin-bottom">Your Cart</div>
                <div className="uk-margin-small-bottom">{nodes}</div>
                <div className="uk-margin-small-bottom">Total: &euro;{this.state.total}</div>
                <button className="uk-button uk-button-large uk-button-success uk-align-right"
                    onClick={this.checkout}
                    disabled={hasProducts ? '' : 'disabled'}>
                    Checkout
                </button>
            </div>
        );
    },

    _onChange: function () {
        this.setState(this._getStateFromStores());
    }
});

module.exports = Cart;
