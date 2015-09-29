import { Store, toImmutable } from 'nuclear-js';
import {
    CHECKOUT_START,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILED,
    ADD_TO_CART
} from '../action-types';

const initialState = toImmutable({
    productQuantities: {},
    pendingCheckout: {}
});

/**
 * CartStores holds the mapping of productId => quantity
 * and also maintains rollback information for the checkout process
 */
export default Store({
    getInitialState() {
        return initialState;
    },

    initialize() {
        this.on(CHECKOUT_START, beginCheckout);
        this.on(CHECKOUT_SUCCESS, finishCheckout);
        this.on(CHECKOUT_FAILED, rollback);
        this.on(ADD_TO_CART, addToCart);
    }
});

function addToCart(state, { product }) {
    return (state.hasIn(['productQuantities', product.id]))
        ? state.updateIn(['productQuantities', product.id], quantity => quantity + 1)
        : state.setIn(['productQuantities', product.id], 1);
}

function beginCheckout(state) {
    const currentItems = state.get('productQuantities');

    return state
        .set('productQuantities', toImmutable({}))
        .set('pendingCheckout', currentItems);
}

function finishCheckout() {
    return initialState;
}

function rollback(state) {
    return state
        .set('productQuantities', state.get('pendingCheckout'))
        .set('pendingCheckout', toImmutable({}));
}
