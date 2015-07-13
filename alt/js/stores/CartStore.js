'use strict';

var alt = require('../alt');

var ActionCreators = require('../actions/ActionCreators');
var ProductStore = require('./ProductStore');
var assign = require('object-assign');

class CartStore {
    constructor() {
        this.bindActions(ActionCreators);
        this.products = {};
    }

    onAddToCart(product) {
        this.waitFor(ProductStore.dispatchToken);
        var id = product.id;
        product.quantity = id in this.products ? this.products[id].quantity + 1 : 1;
        this.products[id] = assign({}, product);
    }

    onCartCheckout() {
        this.products = {};
    }

    onFinishCheckout(products) {
        // this can be used to redirect to success page, etc.
        console.log('YOU BOUGHT:', products);
    }

    static getAddedProducts() {
        var { products } = this.getState();
        return Object.keys(products).map(function (id) {
            return products[id];
        });
    }

    static getTotal() {
        var total = 0;
        var { products } = this.getState();
        for (var id in products) {
            var product = products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    }
}

module.exports = alt.createStore(CartStore, 'CartStore');
