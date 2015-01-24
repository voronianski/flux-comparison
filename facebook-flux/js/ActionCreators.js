var AppDispatcher = require('./AppDispatcher');
var Constants = require('./Constants');
var WebAPIUtils = require('./utils/WebAPIUtils');

var ActionTypes = Constants.ActionTypes;

var ActionsCreators = exports;

ActionsCreators.receiveProducts = function (products) {
    AppDispatcher.handleServerAction({
        type: ActionTypes.RECEIVE_PRODUCTS,
        products: products
    });
};

ActionsCreators.addToCart = function (product) {
    AppDispatcher.handleViewAction({
        type: ActionTypes.ADD_TO_CART,
        product: product
    });
};

ActionsCreators.cartCheckout = function (products) {
    AppDispatcher.handleViewAction({
        type: ActionTypes.CART_CHECKOUT,
        products: products
    });

    WebAPIUtils.checkoutProducts(products);
};
