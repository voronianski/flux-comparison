'use strict';

var Reflux = require('reflux');

var ActionCreators = Reflux.createActions([
    'receiveProducts',
    'addToCart',
    'cartCheckout',
    'finishCheckout'
]);

module.exports = ActionCreators;
