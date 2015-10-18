import shop from '../../../common/api/shop';

export function receiveProducts({ products }) {} // eslint-disable-line no-unused-vars
export function getAllProducts(payload, { currentActionSet }) {
    shop.getProducts(products => {
        currentActionSet.receiveProducts({ products });
    });
}

export const introspection = {
    getProduct({ productId }) {}, // eslint-disable-line no-unused-vars
    hasInventoryOfProduct({ productId }) {} // eslint-disable-line no-unused-vars
};
