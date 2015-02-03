var Marty = require('marty');
var CartConstants = require('../constants/cartConstants');

var CartSourceActionCreators = Marty.createActionCreators({
  types: {
    finishCheckout: CartConstants.SUCCESS_CHECKOUT,
  },
  finishCheckout: function (products) {
    this.dispatch(products);
  }
});

module.exports = CartSourceActionCreators;