'use strict';

var createStore = require('fluxible/utils/createStore');
var assign = require('object-assign');

var CartStore = createStore({
    storeName: 'CartStore',

    initialize: function () {
        this._products = {};
    },

    handlers: {
        'ADD_TO_CART': 'handleAddToCart',
        'CART_CHECKOUT': 'handleCartCheckout',
        'SUCCESS_CHECKOUT': 'handleSuccessCheckout'
    },

    handleAddToCart: function (payload) {
        this.dispatcher.waitFor('ProductStore', function () {
            var product = payload.product;
            var id = product.id;

            product.quantity = id in this._products ? this._products[id].quantity + 1 : 1;
            this._products[id] = assign({}, product[id], product);
            this.emitChange();
        }.bind(this));
    },

    handleCartCheckout: function () {
        this._products = {};
        this.emitChange();
    },

    handleSuccessCheckout: function (payload) {
        console.log('YOU BOUGHT:', payload.products);
    },

    getAddedProducts: function () {
        return Object.keys(this._products).map(function (id) {
            return this._products[id];
        }.bind(this));
    },

    getTotal: function () {
        var total = 0;
        for (var id in this._products) {
            var product = this._products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    }
});

module.exports = CartStore;
