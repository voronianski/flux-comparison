var Marty = require('marty');

var CartConstants = Marty.createConstants([
    'ADD_TO_CART',
    'CART_CHECKOUT',
    'SUCCESS_CHECKOUT'
]);

module.exports = CartConstants;