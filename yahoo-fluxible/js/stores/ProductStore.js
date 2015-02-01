'use strict';

var createStore = require('fluxible/utils/createStore');

var ProductStore = createStore({
    storeName: 'ProductStore',

    initialize: function () {
        this._products = [];
    },

    handlers: {
        'ADD_TO_CART': 'decreaseInventory',
        'RECEIVE_PRODUCTS': 'handleReceive'
    },

    handleReceive: function (payload) {
        this._products = payload.products;
        this.emitChange();
    },

    decreaseInventory: function (payload) {
        var product = payload.product;
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
        this.emitChange();
    },

    getAllProducts: function () {
        return this._products;
    }
});

module.exports = ProductStore;
