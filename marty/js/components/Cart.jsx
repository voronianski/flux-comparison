'use strict';

var React = require('react');
var Marty = require('marty');
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

var Cart = React.createClass({
    mixins: [CartState],
    checkout: function () {
        if (!this.state.products.length) {
          return;
        }
        CartActionCreators.cartCheckout(this.state.products);
    },
    render: function () {
        var nodes;
        var products = this.state.products;
        var hasProducts = products.length > 0;

        if (hasProducts) {
            nodes = products.map(function (p) {
                return <Product key={p.id}>{p.title} - &euro;{p.price} x {p.quantity}</Product>;
            });
        } else {
            nodes = <div>Please add some products to cart.</div>;
        }

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
    }
});

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

module.exports = Cart;
