'use strict';

var McFly = require('../dispatcher/McFly');
var WebAPIUtils = require('../utils/WebAPIUtils');

var CartActions = McFly.createActions({
    cartCheckout: function (products) {
        WebAPIUtils.checkoutProducts(products);
        return {
            actionType: 'CART_CHECKOUT',
            products: products
        };
    }
});

module.exports = CartActions;
