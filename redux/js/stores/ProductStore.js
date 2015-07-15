import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';

function _decreaseInventory (product) {
    product.inventory = product.inventory > 0 ? product.inventory - 1 : 0;
}

export default function handle(state = {}, action) {
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            for (let product of action.products) {
                newState[product.id] = product;
            }
            return newState;

        case ADD_TO_CART:
            _decreaseInventory(newState[action.product.id]);
            return newState;

        default:
            return state;
    }

    // from the redux README:
    // BUT THAT'S A SWITCH STATEMENT!
    // Right. If you hate 'em, see the FAQ below.
    // https://github.com/gaearon/redux#but-there-are-switch-statements
}
