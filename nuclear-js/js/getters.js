const products = [
    ['products'],
    products => {
        return products.toList().toJS();
    }
];

const cartProducts = [
    ['products'],
    ['cart', 'productQuantities'],
    (products, quantities) => {
        return quantities.map((quantity, productId) => {
            var product = products.get(productId);
            return product
                .set('quantity', quantity)
                .remove('inventory'); // inventory shouldnt be known in cart
        }).toList().toJS();
    }
];

const cartTotal = [
    cartProducts,
    (items) => {
        const total = items.reduce((total, item) => {
            return total + (item.quantity * item.price);
        }, 0) || 0;
        return total.toFixed(2);
    }
];

export default { products, cartProducts, cartTotal };
