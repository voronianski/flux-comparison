'use strict';

var keyMirror = require('keymirror');

module.exports = {
    ActionTypes: keyMirror({
        RECEIVE_PRODUCTS: null,
        ADD_TO_CART: null,
        CART_CHECKOUT: null,
        SUCCESS_CHECKOUT: null
    }),

    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        VIEW_ACTION: null
    })
};
