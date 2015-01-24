/**
 * Mocking client-server processing
 */

var Shop = exports;

var _products = [
    {id: 1, title: 'iPad 4 Mini', price: 500.01, inventory: 2},
    {id: 2, title: 'H&M T-Shirt White', price: 10.99, inventory: 10},
    {id: 3, title: 'Charli XCX - Sucker CD', price: 19.99, inventory: 5}
];

Shop.getProducts = function (cb, timeout) {
    timeout = timeout || 100;
    setTimeout(function () {
        cb(_products);
    }, timeout);
};

Shop.buyProducts = function (payload, cb, timeout) {
    console.log(payload);
    timeout = timeout || 100;

    setTimeout(function () {
        cb();
    }, timeout);
};
