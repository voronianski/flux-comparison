'use strict';

var Reflux = require('reflux');
var WebAPIUtils = require('../utils/WebAPIUtils');

var ActionCreators = exports;

ActionCreators.receiveProducts = Reflux.createAction();

ActionCreators.addToCart = Reflux.createAction();

ActionCreators.cartCheckout = Reflux.createAction();
ActionCreators.cartCheckout.listen(function (products) {
    WebAPIUtils.checkoutProducts(products);
});

ActionCreators.finishCheckout = Reflux.createAction();
