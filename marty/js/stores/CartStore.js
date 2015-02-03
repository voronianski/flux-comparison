'use strict';

var Marty = require('marty');
var assign = require('object-assign');
var CartConstants = require('../constants/cartConstants');

var CartStore = Marty.createStore({
  displayName: 'Cart',
  handlers: {
    onAddToCart: CartConstants.ADD_TO_CART,
    onCartCheckout: CartConstants.CART_CHECKOUT,
    onSuccessCheckout: CartConstants.SUCCESS_CHECKOUT
  },
  getInitialState: function () {
    return {}
  },
  onAddToCart: function (product) {
    var id = product.id;

    product.quantity = id in this.state ? this.state[id].quantity + 1 : 1;
    this.state[id] = assign({}, product[id], product);
    this.hasChanged();
  },
  onCartCheckout: function () {
    this.state = {};
    this.hasChanged();
  },
  onSuccessCheckout: function (products) {
    console.log('YOU BOUGHT:', products);
  },
  getAddedProducts: function () {
    return Object.keys(this.state).map(function (id) {
      return this.state[id];
    }.bind(this));
  },
  getTotal: function () {
    var total = 0;
    for (var id in this.state) {
      var product = this.state[id];
      total += product.price * product.quantity;
    }
    return total.toFixed(2);
  }
});

module.exports = CartStore;
