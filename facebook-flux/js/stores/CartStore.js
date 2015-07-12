'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');

var ProductStore = require('./ProductStore');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _products = {};

function _addToCart (product) {
    var id = product.id;
    product.quantity = id in _products ? _products[id].quantity + 1 : 1;
    _products[id] = assign({}, product);
}

var CartStore = assign({}, EventEmitter.prototype, {
    getAddedProducts: function () {
        return Object.keys(_products).map(function (id) {
            return _products[id];
        });
    },

    getTotal: function () {
        var total = 0;
        for (var id in _products) {
            var product = _products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (fn) {
        this.on(CHANGE_EVENT, fn);
    },

    removeChangeListener: function (fn) {
        this.removeListener(CHANGE_EVENT, fn);
    }
});

CartStore.dispatchToken = AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            AppDispatcher.waitFor([ProductStore.dispatchToken]);
            _addToCart(action.product);
            CartStore.emitChange();
            break;
        case ActionTypes.CART_CHECKOUT:
            _products = {};
            CartStore.emitChange();
            break;
        case ActionTypes.SUCCESS_CHECKOUT:
            // this can be used to redirect to success page, etc.
            console.log('YOU BOUGHT:', action.products);
            break;
        default:
    }

});

module.exports = CartStore;
