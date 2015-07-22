import { dispatch, state } from './';
import { api } from './creators';
import shop from '../../../common/api/shop';

export let getProducts = () => {
    dispatch(api.products.request());
    shop.getProducts(products => {
        dispatch(api.products.done(products));
    });
};

export let buyProducts = () => {
    let cart = state().cart;
    dispatch(api.checkout.request());
    shop.buyProducts(cart, () => {
        dispatch(api.checkout.done(cart));
    });
};
