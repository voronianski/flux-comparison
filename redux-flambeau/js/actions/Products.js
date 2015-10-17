import shop from '../../../common/api/shop';


export function receiveProducts({ products }) {}
export function getAllProducts(payload, { currentActionSet }) {
    shop.getProducts(products => {
        currentActionSet.receiveProducts({ products });
    });
}

export const introspection = {
  getProduct({ productId }) {},
  hasInventoryOfProduct({ productId }) {}
};
