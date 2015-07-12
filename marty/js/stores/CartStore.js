'use strict';

var Marty = require('marty');
var assign = require('object-assign');
var ProductStore = require('./productStore');
var CartConstants = require('../constants/cartConstants');

class CartStore extends Marty.Store {
    constructor(options) {
        super(options);
        this.state = {};
        this.handlers = {
            onAddToCart: CartConstants.ADD_TO_CART,
            onCartCheckout: CartConstants.CART_CHECKOUT,
            onSuccessCheckout: CartConstants.SUCCESS_CHECKOUT
        };
    }

    onAddToCart(product) {
        this.waitFor(ProductStore);

        var id = product.id;
        product.quantity = id in this.state ? this.state[id].quantity + 1 : 1;
        this.state[id] = assign({}, product);
        this.hasChanged();
    }

    onCartCheckout() {
        this.state = {};
        this.hasChanged();
    }

    onSuccessCheckout(products) {
        console.log('YOU BOUGHT:', products);
    }

    getAddedProducts() {
        return Object.keys(this.state).map(function (id) {
            return this.state[id];
        }.bind(this));
    }

    getTotal() {
        var total = 0;
        for (var id in this.state) {
            var product = this.state[id];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    }
}

module.exports = Marty.register(CartStore);
