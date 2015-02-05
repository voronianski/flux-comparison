'use strict';

var shop = require('../../../common/api/shop');
var APIActions = require('../actions/APIActions');

var WebAPIUtils = {
    getAllProducts: function () {
        shop.getProducts(function (products) {
            APIActions.receiveProducts(products);
        });
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function () {
            APIActions.finishCheckout(products);
        });
    }
};

module.exports = WebAPIUtils;
