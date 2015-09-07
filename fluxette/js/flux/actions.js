import shop from '../../../common/api/shop';
import { CART, API } from './types';

export default {
    cart: { add: product => ({ type: CART.ADD, product }) },
    api: {
        getProducts: ({ dispatch }) => {
            dispatch({ type: API.PRODUCTS.REQUEST });
            (new Promise(shop.getProducts))
                .then(products => ({ type: API.PRODUCTS.SUCCESS, products }))
                .then(dispatch);
        },
        checkout: ({ dispatch, state }) => {
            let { cart: products } = state();
            dispatch({ type: API.CHECKOUT.REQUEST });
            (new Promise(done => shop.buyProducts(products, done)))
                .then(() => ({ type: API.CHECKOUT.SUCCESS, products }))
                .then(dispatch);
        }
    }
};
