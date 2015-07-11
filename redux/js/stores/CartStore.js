import { ADD_TO_CART, BEGIN_CHECKOUT } from '../constants/ActionTypes';

function _addToCart (state, product) {
    var id = product.id;
    product.quantity = id in state ? state[id].quantity + 1 : 1;
    state[id] = Object.assign({}, product[id], product);
}

export function getTotal(state) {
    var total = 0;
    for (var id in state) {
        var product = state[id];
        total += product.price * product.quantity;
    }
    return total.toFixed(2);
};

// can be improve with ImmutableJS
export default function handle(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            // https://github.com/gaearon/redux#what-about-waitfor
            // AppDispatcher.waitFor([ProductStore.dispatchToken]);

            _addToCart(state, action.product);

            return Object.assign({}, state);
        case BEGIN_CHECKOUT:
            return Object.assign({}, {});
        default:
            return state;
    }

    // from the redux README:
    // BUT THAT'S A SWITCH STATEMENT!
    // Right. If you hate 'em, see the FAQ below.
    // https://github.com/gaearon/redux#but-there-are-switch-statements
};
