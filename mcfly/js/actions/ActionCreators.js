'use strict';

var McFly = require('../dispatcher/McFly');

var ActionCreators = McFly.createActions({
    receiveProducts: function (products) {
        return {
            actionType: 'RECEIVE_PRODUCTS',
            products: products
        };
    },
    addToCart: function (product) {
        return {
            actionType: 'ADD_TO_CART',
            product: product
        };
    },
    cartCheckout: function (products) {
        return {
            actionType: 'CART_CHECKOUT',
            products: products
        };
    },
    finishCheckout: function (products) {
        return {
            actionType: 'SUCCESS_CHECKOUT',
            products: products
        };
    }
});

module.exports = ActionCreators;
