'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/AppConstants');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _products = [];

function _decreaseInventory (product) {
    product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
}

var ProductStore = assign({}, EventEmitter.prototype, {
    getAllProducts: function () {
        return _products;
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

ProductStore.dispatchToken = AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.type) {
        case ActionTypes.RECEIVE_PRODUCTS:
            _products = action.products;
            ProductStore.emitChange();
            break;
        case ActionTypes.ADD_TO_CART:
            _decreaseInventory(action.product);
            ProductStore.emitChange();
            break;
        default:
    }
});

module.exports = ProductStore;
