'use strict';

var React = require('react');
var Marty = require('marty');
var Cart = require('../../../common/components/Cart.jsx');
var CartStore = require('../stores/CartStore');
var CartActionCreators = require('../actions/cartActionCreators');

var CartContainer = React.createClass({
    onCheckoutClicked() {
        if (!this.props.products.length) {
          return;
        }
        CartActionCreators.cartCheckout(this.props.products);
    },

    render() {
        return (
            <Cart products={this.props.products} total={this.props.total} onCheckoutClicked={this.onCheckoutClicked} />
        );
    }
});

module.exports = Marty.createContainer(CartContainer, {
    listenTo: CartStore,
    fetch: {
        products() {
            return CartStore.getAddedProducts();
        },
        total() {
            return CartStore.getTotal()
        }
    }
});
