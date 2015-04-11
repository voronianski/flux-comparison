'use strict';

var Marty = require('marty');
var Shop = require('../../../common/api/shop');

class ShopAPI extends Marty.HttpStateSource {
    getAllProducts() {
        return new Promise(function (resolve) {
            Shop.getProducts((products) => {
                resolve(products);
            });
        });
    }
    checkoutProducts(products) {
        return new Promise(function (resolve) {
            Shop.buyProducts(products, () => {
                resolve();
            });
        });
    }
}

module.exports = Marty.register(ShopAPI);
