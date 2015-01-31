'use strict';

module.exports = function (context, payload, done) {
    context.dispatch('ADD_TO_CART', {product: payload.product});
    done();
};
