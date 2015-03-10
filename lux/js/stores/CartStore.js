'use strict';

var assign = require('object-assign');
var lux = require('lux.js');
var products = require('./ProductStore');

var CartStore = new lux.Store({
    namespace: 'cart',

    state: { products: { } },

    handlers: {
        addToCart: {
            waitFor: ['products'],
            handler: function(product) {
                var newState = this.getState();
                newState.products[product.id] = (
                    newState.products[product.id] ||
                    assign(products.getProduct(product.id), { quantity: 0 })
                );
                newState.products[product.id].quantity += 1;
                this.setState(newState);
            }
        },
        cartCheckout: function() {
            this.replaceState({ products: {} });
        },
        successCheckout: function(products) {
            // this can be used to redirect to success page, etc.
            console.log('YOU BOUGHT:');
            if (typeof console.table === 'function') {
                console.table(products);
            } else {
                console.log(JSON.stringify(products, null, 2));
            }
        }
    },

    getProduct: function(id) {
        return this.getState().products[id];
    },

    getAddedProducts: function() {
        var state = this.getState();
        return Object.keys(state.products).map(function(id) {
            return state.products[id];
        });
    },

    getTotal: function() {
        var total = 0;
        var products = this.getState().products;
        for (var id in products) {
            var product = products[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    }
});

module.exports = CartStore;
