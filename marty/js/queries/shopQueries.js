'use strict'

var Marty = require('marty');
var ShopAPI = require('../sources/shopAPI');
var ProductConstants = require('../constants/productConstants');

class ShopQueries extends Marty.Queries {
    getAllProducts() {
        return ShopAPI.getAllProducts()
            .then(products =>  this.dispatch(ProductConstants.RECEIVE_PRODUCTS, products))
            .catch(error => this.dispatch(ProductConstants.RECEIVE_PRODUCTS_FAILED, error));
    }
}

module.exports = Marty.register(ShopQueries);