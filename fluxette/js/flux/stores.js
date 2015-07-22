import { Store } from 'fluxette';
import { CART, API } from './types';
import { splicefilter } from '../util';

let products = Store([], {
    [API.PRODUCTS.DONE]: (products, action) => action.products,
    [CART.ADD]: (products, action) => {
        let { id } = action.product;
        let [left, product, right] = splicefilter(products, p => p.id === id);
        return [...left, { ...product, inventory: product.inventory - 1 }, ...right];
    }
});

let cart = Store({}, {
    [CART.ADD]: (cart, action) => {
        let { product } = action;
        product = cart[product.id] || product;
        return { ...cart, [product.id]: { ...product, quantity: (product.quantity || 0) + 1 } };
    },
    [API.CHECKOUT.REQUEST]: cart => ({})
});

export default { products, cart };
