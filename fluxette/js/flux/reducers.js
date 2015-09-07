import Shape from 'reducer/shape';
import Leaf from 'reducer/leaf';
import SideEffect from 'reducer/sideeffect';
import { CART, API } from './types';

let products = Leaf([], {
    [API.PRODUCTS.SUCCESS]: (products, action) => action.products,
    [CART.ADD]: (products, action) => {
        let { id } = action.product;
        let i, product;
        for (i = 0; i < products.length; i++) {
            if (products[i].id === id) {
                product = products[i];
                break;
            }
        }
        return [
            ...products.slice(0, i),
            { ...product, inventory: product.inventory - 1 },
            ...products.slice(i + 1)
        ];
    }
});

let cart = Leaf({}, {
    [CART.ADD]: (cart, action) => {
        let { product } = action;
        let { inventory, ...p } = cart[product.id] || product;
        return { ...cart, [p.id]: { ...p, quantity: (p.quantity || 0) + 1 } };
    },
    [API.CHECKOUT.REQUEST]: () => ({})
});

export default SideEffect(
    Shape({ products, cart }),
    (state, action) => {
        if (action && (action.type === API.CHECKOUT.SUCCESS)) {
            let { products } = action;
            console.log('YOU BOUGHT:', Object.keys(products).map(key => products[key]));
        }
    }
);
