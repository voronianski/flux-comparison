'use strict';

var Reflux = require('reflux');
var ActionCreators = require('../actions/ActionCreators');

var ProductStore = Reflux.createStore({
    init: function () {
        this._products = [];
        this.listenTo(ActionCreators.receiveProducts, this.onReceiveProducts);
        this.listenTo(ActionCreators.addToCart, this.onAddToCart);
    },

    onReceiveProducts: function (products) {
        this._products = products;
        this.trigger();
    },

    onAddToCart: function (product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
        this.trigger();
    },

    getAllProducts: function () {
        return this._products;
    }
});

module.exports = ProductStore;
