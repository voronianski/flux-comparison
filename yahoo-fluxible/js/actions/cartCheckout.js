'use strict';

var shop = require('../../../common/api/shop');

module.exports = function (context, payload, done) {
    var products = payload.products;

    context.dispatch('CART_CHECKOUT');

    shop.buyProducts(products, function () {
        context.dispatch('SUCCESS_CHECKOUT', {products: products});
        done();
    });
};
