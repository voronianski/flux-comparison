import { combineReducers } from 'flambeau';

const product = {
    Cart: {
        productAddedToCart(state, { productId }) { // eslint-disable-line no-unused-vars
            return {
                ...state,
                inventory: state.inventory - 1
            };
        }
    }
};

const byId = {
    getInitialState() {
        return {};
    },

    Products: {
        receiveProducts(state, { products }) {
            return {
                ...state,
                ...products.reduce((obj, product) => {
                    obj[product.id] = product;
                    return obj;
                }, {})
            };
        },

        introspection: {
            getProduct(state, { productId }) {
                return state[productId];
            },

            hasInventoryOfProduct(state, { productId }) {
                return !!state[productId] && state[productId].inventory > 0;
            }
        }
    },

    Cart: {
        productAddedToCart(state, { productId }) {
            return {
                ...state,
                [productId]: product.Cart.productAddedToCart(state[productId], { productId })
            };
        }
    }
};

const visibleIds = {
    getInitialState() {
        return [];
    },

    Products: {
        receiveProducts(state, { products }) {
            return products.map(product => product.id);
        }
    }
}


export default combineReducers({
    byId,
    visibleIds
});

export function getProduct(state, id) {
    return state.byId[id];
}

export function getVisibleProducts(state) {
    return state.visibleIds.map(id => getProduct(state, id));
}
