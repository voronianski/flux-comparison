import shop from '../../../common/api/shop';

export function productAddedToCart({ productId }) {} // eslint-disable-line no-unused-vars
export function addToCart({ productId }, { allActionSets: { Products }, currentActionSet }) {
    if (Products.getConsensus.hasInventoryOfProduct({ productId }).some()) {
        currentActionSet.productAddedToCart({ productId });
    }
}

export function checkoutRequested() {}
export function checkoutSucceeded({ cart }) {} // eslint-disable-line no-unused-vars
export function checkoutFailed({ cart }) {} // eslint-disable-line no-unused-vars

export function checkout({ products }, { currentActionSet }) {
    const cart = currentActionSet.getConsensus.getCart().singleton();

    currentActionSet.checkoutRequested();
    shop.buyProducts(products, () => {
        currentActionSet.checkoutSucceeded({ cart });
        // Replace the line above with line below to rollback on failure:
        // currentActionSet.checkoutFailed({ cart });
    });
}

export const introspection = {
    getCart() {}
};
