var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppDispatcher = require('../AppDispatcher');
var Constants = require('../Constants');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _products = {};

function _addToCart (product) {
    var id = product.id;
    product.quantity = id in _products ? _products[id].quantity + 1 : 1;
    _products[id] = assign({}, product[id], product);
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
            _addToCart(action.product);
            CartStore.emitChange();
            break;
        case ActionTypes.CHECKOUT_CART:
            _products = {};
            CartStore.emitChange();
            break;
        default:
    }

});

module.exports = CartStore;
