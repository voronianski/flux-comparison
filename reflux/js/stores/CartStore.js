'use strict';

var Reflux = require('reflux');
var assign = require('object-assign');

var ProductStore = require('./ProductStore');
var ActionCreators = require('../actions/ActionCreators');

var CartStore = Reflux.createStore({
    listenables: ActionCreators,
    init: function () {
        this._products = {};

        // subscribe to listen for whole ProductStore first as there is no `waitFor` in Reflux
        // (https://github.com/voronianski/flux-samples/blob/master/facebook-flux/js/stores/CartStore.js#L55)
        this.listenTo(ProductStore, noop);
    },

    onAddToCart: function (product) {
        var id = product.id;

        product.quantity = id in this._products ? this._products[id].quantity + 1 : 1;
        this._products[id] = assign({}, product);
        this.trigger(this.getAddedProducts(), this.getTotal());
    },

    onCartCheckout: function () {
        this._products = {};
        this.trigger(this.getAddedProducts(), this.getTotal());
    },

    onFinishCheckout: function (products) {
        console.log('YOU BOUGHT:', products);
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

function noop () {}

module.exports = CartStore;
