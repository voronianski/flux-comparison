'use strict';

var alt = require('../alt');

var ActionCreators = require('../actions/ActionCreators');

class ProductStore {
    constructor() {
        this.bindActions(ActionCreators);
        this.products = [];
    }

    decreaseInventory(product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
    }

    onAddToCart(product) {
        this.decreaseInventory(product);
    }

    onReceiveProducts(products) {
        this.products = products;
    }
}

module.exports = alt.createStore(ProductStore, 'ProductStore');
