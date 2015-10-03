'use strict';

var React = require('react');
var Cart = require('../../../common/components/Cart.jsx');
var State = require('../State');

var CartContainer = React.createClass({
    onCheckoutClicked: function () {
        if ( this.props.cart.products.length ) {
            State.trigger('products:checkout');
        }
    },

    render: function () {
        var cart = this.props.cart;
        var total = 0;

        cart.products.forEach( function (product) {
            total += product.price * product.quantity;
        });

        return (
            <Cart products={cart.products} total={total.toFixed(2)} onCheckoutClicked={this.onCheckoutClicked} />
        );
    }
});

module.exports = CartContainer;
