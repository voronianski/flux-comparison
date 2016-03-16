'use strict';

var createStore = require('fluxury').createStore;
var ProductStore = require('./ProductStore');

var CartStore = createStore(
  'Cart Store',
  {
    products: [], // only products in the cart
    total: "0.00"
  },
  {
    addToCart: (state, product, waitFor) => {

      waitFor([ProductStore.dispatchToken])

      var count = state.products.filter( n => n.id === product.id ).length
      var updatedProducts, total;

      if (count === 1) { // add quanity to cart
        updatedProducts = state.products.map(n => {
            if (n.id === product.id) {
              return Object.assign({}, n, {
                quantity: n.quantity+1,
                inventory: n.inventory-1
              });
            }
            return n;
        })
      } else { // put item into cart
        updatedProducts = state.products.concat(
            Object.assign( {}, product, {
              quantity: 1,
              inventory: product.inventory-1
            })
        )
      }

      total = updatedProducts.reduce(
          (a, b) => a + (b.quantity * b.price),
      0).toFixed(2)

      return Object.assign({}, state, {
        products: updatedProducts,
        total: total
      });

    },
    cartCheckout: (state, data) => ({
      products: [], // only products in the cart
      total: "0.00"
    }),
    finishCheckout: (state, products) => {
      console.log('YOU BOUGHT:', products);
      return state;
    },
    receiveProducts: (state, data) => state
  }
)

module.exports = CartStore
