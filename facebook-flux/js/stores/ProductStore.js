var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../AppDispatcher');
var Constants = require('../Constants');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _products = [];

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
            _products = _products.concat(action.products);
            ProductStore.emitChange();
            break;
        default:
    }

});

module.exports = ProductStore;
