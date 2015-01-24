var keyMirror = require('react/lib/keyMirror');

module.exports = {
    ActionTypes: keyMirror({
        RECEIVE_PRODUCTS: null,
        ADD_TO_CART: null,
        CART_CHECKOUT: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};
