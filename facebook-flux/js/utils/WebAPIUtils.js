var shop = require('../../../common/api/shop');
var ActionCreators = require('../actions/ActionCreators');

module.exports = {
    getAllProducts: function () {
        shop.getProducts(function (products) {
            ActionCreators.receiveProducts(products);
        });
    },

    checkoutProducts: function (products) {
        shop.buyProducts(products, function () {
            // success action
        });
    }
};
