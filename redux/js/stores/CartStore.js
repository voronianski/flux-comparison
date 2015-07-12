import { ADD_TO_CART, BEGIN_CHECKOUT, SUCCESS_CHECKOUT } from '../constants/ActionTypes';

function _addToCart (state, product) {
    let cartProduct = Object.assign({}, product[id], product);
    let { id } = cartProduct;

    cartProduct.quantity = id in state ? state[id].quantity + 1 : 1;
    delete cartProduct.inventory;

    state[id] = cartProduct;
}

export function getTotal(state) {
    let total = 0;
    for (let id in state) {
        let product = state[id];
        total += product.price * product.quantity;
    }
    return total.toFixed(2);
}

// can be improve with ImmutableJS
export default function handle(state = {}, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case ADD_TO_CART:
            // https://github.com/gaearon/redux#what-about-waitfor
            // AppDispatcher.waitFor([ProductStore.dispatchToken]);
            _addToCart(newState, Object.assign({}, action.product));
            return newState;

        case BEGIN_CHECKOUT:
            newState = {};
            return newState;

        case SUCCESS_CHECKOUT:
            // this can be used to redirect to success page, etc.
            console.log('YOU BOUGHT:', action.products);
            return {};

        default:
            return state;
    }

    // from the redux README:
    // BUT THAT'S A SWITCH STATEMENT!
    // Right. If you hate 'em, see the FAQ below.
    // https://github.com/gaearon/redux#but-there-are-switch-statements
}
