import { combineReducers } from 'flambeau';

const addedIds = {
    getInitialState() {
        return [];
    },

    Cart: {
        productAddedToCart(state, { productId }) {
            if (state.indexOf(productId) !== -1) {
                return state;
            }
            return [...state, productId];
        }
    }
};

const quantityById = {
    getInitialState() {
        return {};
    },

    Cart: {
        productAddedToCart(state, { productId }) {
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            };
        }
    }
};

export default combineReducers({
    addedIds,
    quantityById
}, {
    alsoAdd: (combined) => ({
        Cart: {
            checkoutRequested() {
                return combined.getInitialState();
            },

            checkoutFailed(state, { cart }) {
                return cart;
            },

            introspection: {
                getCart(state) {
                    return state;
                }
            }
        }
    })
});

export function getQuantity(state, productId) {
    return state.quantityById[productId] || 0;
}

export function getAddedIds(state) {
    return state.addedIds;
}
