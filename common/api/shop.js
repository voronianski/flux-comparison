/**
 * Mocking client-server processing
 */
'use strict';

var Shop = exports;

var _products = require('./products.json');

Shop.getProducts = function (cb, timeout) {
    timeout = timeout || 100;
    setTimeout(function () {
        cb(_products);
    }, timeout);
};

Shop.buyProducts = function (payload, cb, timeout) {
    console.log(payload);
    timeout = timeout || 100;

    setTimeout(function () {
        cb();
    }, timeout);
};
