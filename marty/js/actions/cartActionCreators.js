var Marty = require('marty');
var ShopAPI = require('../sources/shopAPI');
var CartConstants = require('../constants/cartConstants');

var CartActionCreators = Marty.createActionCreators({
    types: {
        addToCart: CartConstants.ADD_TO_CART,
        cartCheckout: CartConstants.CART_CHECKOUT
    },
    addToCart: function (product) {
        this.dispatch(product);
    },
    cartCheckout: function (products) {
        this.dispatch(products);
        ShopAPI.checkoutProducts(products);
    }
});

module.exports = CartActionCreators;