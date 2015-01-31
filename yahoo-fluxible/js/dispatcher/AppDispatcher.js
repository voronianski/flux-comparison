'use strict';

var Dispatchr = require('dispatchr')();

var ProductStore = require('./stores/ProductStore');
var CartStore = require('./stores/CartStore');

Dispatchr.registerStore(ProductStore);
Dispatchr.registerStore(CartStore);
