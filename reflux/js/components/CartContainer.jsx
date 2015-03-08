'use strict';

var React = require('react');
var Reflux = require('reflux');
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var ActionCreators = require('../actions/ActionCreators');

var CartContainer = React.createClass({
    mixins: [Reflux.listenTo(CartStore,"onCartChange")],

    getInitialState: function() {
        return {
            products: [],
            total: '0'
        }
    },
    onCartChange: function(products, total) {
        this.setState({
            products: products,
            total: total
        });
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
    }

});

module.exports = CartContainer;
