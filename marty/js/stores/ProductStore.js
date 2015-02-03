'use strict';

var Marty = require('marty');
var ShopAPI = require('../sources/shopAPI');
var CartConstants = require('../constants/cartConstants');
var ProductConstants = require('../constants/productConstants');

var ProductStore = Marty.createStore({
    displayName: 'Products',
    handlers: {
        onAddToCart: CartConstants.ADD_TO_CART,
        receiveProducts: ProductConstants.RECEIVE_PRODUCTS
    },
    getInitialState: function () {
        return [];
    },
    receiveProducts: function (products) {
        this.state = products;
        this.hasChanged();
    },
    onAddToCart: function (product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
        this.hasChanged();
    },
    getAllProducts: function () {
        return this.fetch({
            id: 'products',
            locally: function () {
                if (this.hasAlreadyFetched('products')) {
                    return this.state;
                }
            },
            remotely: function () {
                return ShopAPI.getAllProducts();
            }
        });
    }
});

module.exports = ProductStore;


