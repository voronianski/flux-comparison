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
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        CartStore.listen(this._onChange);
    },

    componentWillUnmount: function () {
        CartStore.unlisten(this._onChange);
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

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = CartContainer;
