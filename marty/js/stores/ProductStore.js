'use strict';

var Marty = require('marty');
var ShopQueries = require('../queries/shopQueries');
var CartConstants = require('../constants/cartConstants');
var ProductConstants = require('../constants/productConstants');

class ProductStore extends Marty.Store {
    constructor(options) {
        super(options);

        this.state = [];
        this.handlers = {
            onAddToCart: CartConstants.ADD_TO_CART,
            receiveProducts: ProductConstants.RECEIVE_PRODUCTS
        };
    }
    receiveProducts(products) {
        this.state = products;
        this.hasChanged();
    }

    onAddToCart(product) {
        product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
        this.hasChanged();
    }

    getAllProducts() {
        return this.fetch({
            id: 'products',
            locally() {
                if (this.hasAlreadyFetched('products')) {
                    return this.state;
                }
            },
            remotely() {
                return ShopQueries.getAllProducts();
            }
        });
    }
}

module.exports = Marty.register(ProductStore);
