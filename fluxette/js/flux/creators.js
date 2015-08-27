import { CART, API } from './types';

export default {
    cart: { add: product => ({ type: CART.ADD, product }) },
    api: {
        products: {
            request: () => ({ type: API.PRODUCTS.REQUEST }),
            done: products => ({ type: API.PRODUCTS.DONE, products })
        },
        checkout: {
            request: () => ({ type: API.CHECKOUT.REQUEST }),
            done: products => ({ type: API.CHECKOUT.DONE, products })
        }
    }
};
