'use strict';

var React = require('react');
var CartStore = require('../stores/CartStore');
var ActionCreators = require('../actions/ActionCreators');

function _getStateFromStores () {
    return {
        products: CartStore.getAddedProducts(),
        total: CartStore.getTotal()
    };
}

var Product = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

var Cart = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        CartStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        CartStore.removeChangeListener(this._onChange);
    },

    checkout: function () {
        if (!this.state.products.length) {
            return;
        }
        ActionCreators.cartCheckout(this.state.products);
    },

    render: function () {
        var nodes = !this.state.products.length ?
            <div>No products added</div> :
            this.state.products.map(function (p) {
                return <Product key={p.id}>{p.title} - &euro;{p.price} x {p.quantity}</Product>;
            });

        return (
            <div>
                <h3>Cart products:</h3>
                <div>{nodes}</div>
                <div>Pay: {this.state.total}</div>
                <button onClick={this.checkout}>Checkout!</button>
            </div>
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = Cart;
