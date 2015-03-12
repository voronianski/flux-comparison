'use strict';

var shop = require('../../../common/api/shop');
var lux = require('lux.js');

module.exports = lux.actionCreatorListener({
    handlers: {
        cartCheckout: function(products) {
            shop.buyProducts(products, function() {
                this.publishAction('successCheckout', products);
            }.bind(this));
        },
        getAllProducts: function() {
            shop.getProducts(function(products) {
                this.publishAction('receiveProducts', products);
            }.bind(this));
        },
    }
});
