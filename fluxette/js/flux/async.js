import { api } from './creators';
import shop from '../../../common/api/shop';

export let getProducts = ({ dispatch }) =>
    () => {
        dispatch(api.products.request());
        shop.getProducts(products => {
            dispatch(api.products.done(products));
        });
    };

export let buyProducts = ({ dispatch, state }) =>
    () => {
        let { cart } = state();
        dispatch(api.checkout.request());
        shop.buyProducts(cart, () => {
            dispatch(api.checkout.done(cart));
        });
    };
