'use strict';

var dispatch = require('fluxury').dispatch;
var checkoutProducts = require('../utils/WebAPIUtils').checkoutProducts;
var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionsCreators = exports;

ActionsCreators.receiveProducts = function (products) {
  dispatch('receiveProducts', products)
};

ActionsCreators.addToCart = function (product) {
  dispatch('addToCart', product)
};

ActionsCreators.cartCheckout = function (products) {
  dispatch('cartCheckout', products)
  WebAPIUtils.checkoutProducts(products);
};

ActionsCreators.finishCheckout = function (products) {
  dispatch('finishCheckout', products)
};
