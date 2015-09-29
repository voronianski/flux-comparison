import ActionTypes from '../constants/ActionTypes';
import shop from '../../../common/api/shop';

export function getAllProducts() {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.GET_ALL_PRODUCTS
        });

        shop.getProducts((products) => {
            dispatch(receiveProducts(products));
        });
    };
}

export function receiveProducts(products) {
    return {
        type: ActionTypes.RECEIVE_PRODUCTS,
        products: products
    };
}

export function addToCart(product) {
    return {
        type: ActionTypes.ADD_TO_CART,
        product: product
    };
}

export function beginCheckout(products) {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.BEGIN_CHECKOUT
        });

        shop.buyProducts(products, () => {
            dispatch(finishCheckout(products));
        });
    };
}

export function finishCheckout(products) {
    return {
        type: ActionTypes.SUCCESS_CHECKOUT,
        products: products
    };
}
