'use strict';

var McFly = require('../dispatcher/McFly');

var ProductActions = McFly.createActions({
    receiveProducts: function (products) {
        return {
            actionType: 'RECEIVE_PRODUCTS',
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

module.exports = ProductActions;
