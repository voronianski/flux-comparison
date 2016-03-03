'use strict';

var createStore = require('fluxury').createStore;

var ProductStore = createStore(
  'Product Store',
  {
    products: [], // all products available in the client
  },
  {
    addToCart: (state, product) => {
        var updatedProducts = state.products.map(n => {
            if (n.id === product.id) {
              return Object.assign({}, n, { inventory: n.inventory - 1});
            }
            return n;
        })

        return { products: updatedProducts }
    },
    receiveProducts: (state, data) => ({ products: data })
  }, {
    getAllProducts: (state) => state.products
  }
)

window.ProductStore = ProductStore
module.exports = ProductStore
