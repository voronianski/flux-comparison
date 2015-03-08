'use strict';

var shop = require('../../../common/api/shop');
var ActionCreators = require('../actions/ActionCreators');

var WebAPIUtils = {
    getAllProducts: function () {
        shop.getProducts(function (products) {
            ActionCreators.receiveProducts(products);
        });
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function () {
            ActionCreators.finishCheckout(products);
        });
    }
};

ActionCreators.cartCheckout.listen(function (products) {
    WebAPIUtils.checkoutProducts(products);
});

module.exports = WebAPIUtils;