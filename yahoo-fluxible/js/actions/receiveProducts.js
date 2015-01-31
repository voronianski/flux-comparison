'use strict';

var shop = require('../../../common/api/shop');

module.exports = function (context, payload, done) {
    shop.getProducts(function (products) {
        context.dispatch('RECEIVE_PRODUCTS', {products: products});
        done();
    });
};
