var Marty = require('marty');
var Shop = require('../../../common/api/shop');
var CartSourceActionCreators = require('../actions/cartSourceActionCreators');
var ProductSourceActionCreators = require('../actions/productSourceActionCreators');

var ShopAPI = Marty.createStateSource({
  getAllProducts: function () {
    return new Promise(function (resolve) {
      Shop.getProducts(function (products) {
        ProductSourceActionCreators.receiveProducts(products);
        resolve();
      });
    })
  },
  checkoutProducts: function (products) {
    return new Promise(function (resolve) {
      Shop.buyProducts(products, function () {
        CartSourceActionCreators.finishCheckout(products);
        resolve();
      });
    });
  }
});

module.exports = ShopAPI;