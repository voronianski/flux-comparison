'use strict';

var Reflux = require('reflux');
var ActionCreators = require('../actions/ActionCreators');

var ProductStore = Reflux.createStore({
    listenables: ActionCreators,
    init: function () {
    },
    getInitialState: function () {
        this._products = [];
        return this._products
    },

    onReceiveProducts: function (products) {
        this._products = products;
        this.trigger(this._products);
    },

    onAddToCart: function (product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
        this.trigger(this._products);
    },

    getAllProducts: function () {
        return this._products;
    }
});

module.exports = ProductStore;
