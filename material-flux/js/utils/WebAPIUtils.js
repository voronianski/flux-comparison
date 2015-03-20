import shop from '../../../common/api/shop';

export function getAllProducts() {
    return new Promise((resolve, reject) => {
        shop.getProducts(products => resolve(products));
    });
}

export function checkoutProducts(products) {
    return new Promise((resolve, reject) => {
        shop.buyProducts(products, () => {
            resolve(products);
        });
    });
}
