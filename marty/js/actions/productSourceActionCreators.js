'use strict';

var Marty = require('marty');
var ProductConstants = require('../constants/productConstants');

var ProductSourceActionCreators = Marty.createActionCreators({
    types: {
        receiveProducts: ProductConstants.RECEIVE_PRODUCTS
    },

    receiveProducts: function (products) {
        this.dispatch(products);
    }
});

module.exports = ProductSourceActionCreators;
