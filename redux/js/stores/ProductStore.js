import { RECEIVE_PRODUCTS, ADD_TO_CART } from '../constants/ActionTypes';
import ShopAPI from '../../../common/api/shop';

function _decreaseInventory (product) {
    product.inventory = product.inventory > 0 ? product.inventory-1 : 0;
}

export default function handle(state = {}, action) {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            {
                for (let product of action.products) {
                    state[product.id] = product;
                }

                return Object.assign({}, state);
            }
        case ADD_TO_CART:
            {
                _decreaseInventory(state[action.product.id]);

                return Object.assign({}, state);
            }
        default:
            return state;
    }

    // from the redux README:
    // BUT THAT'S A SWITCH STATEMENT!
    // Right. If you hate 'em, see the FAQ below.
    // https://github.com/gaearon/redux#but-there-are-switch-statements
}
