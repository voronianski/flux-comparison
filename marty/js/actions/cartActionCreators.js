'use strict';

var Marty = require('marty');
var ShopAPI = require('../sources/shopAPI');
var CartConstants = require('../constants/cartConstants');

class CartActionCreators extends Marty.ActionCreators {
    addToCart(product) {
        this.dispatch(CartConstants.ADD_TO_CART, product);
    }

    cartCheckout(products) {
        this.dispatch(CartConstants.CART_CHECKOUT, products);

        ShopAPI.checkoutProducts(products)
            .then(() => this.dispatch(CartConstants.SUCCESS_CHECKOUT, products))
            .catch(error => this.dispatch(CartConstants.CHECKOUT_FAILED, error));
    }
}

module.exports = Marty.register(CartActionCreators);
