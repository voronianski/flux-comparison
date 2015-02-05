'use strict';

var McFly = require('../dispatcher/McFly');

var _products = [];

function _decreaseInventory (product) {
    product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
}

var ProductStore = McFly.createStore({
    getAllProducts: function () {
        return _products;
    }
}, function (payload) {

    switch (payload.actionType) {
        case 'RECEIVE_PRODUCTS':
            _products = payload.products;
            ProductStore.emitChange();
            break;
        case 'ADD_TO_CART':
            _decreaseInventory(payload.product);
            ProductStore.emitChange();
            break;
        default:
    }

});

module.exports = ProductStore;
