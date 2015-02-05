'use strict';

var McFly = require('../dispatcher/McFly');

var ProductActions = McFly.createActions({
    addToCart: function (product) {
        return {
            actionType: 'ADD_TO_CART',
            product: product
        };
    }
});

module.exports = ProductActions;
