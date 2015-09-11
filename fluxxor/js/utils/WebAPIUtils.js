import shop from '../../../common/api/shop';

export function getAllProducts() {
    return new Promise((resolve) => {
        shop.getProducts(products => resolve(products));
    });
}

export function checkoutProducts(products) {
    return new Promise((resolve) => {
        shop.buyProducts(products, () => {
            resolve(products);
        });
    });
}
