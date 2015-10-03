'use strict';

var State = require('../State');
var shop = require('../../../common/api/shop');

State
    .on('products:fetch', function () {
        State.get().set({status: 'loading'});

        shop.getProducts(function(products) {
            State.get().set({
                products: products,
                status: 'ready'
            });
        });
    })
    .on('products:checkout', function () {
        var cart = State.get().cart.set({status: 'checkingout'});

        shop.buyProducts(cart.products, function () {
            console.log('YOU BOUGHT:', cart.products.toJS());
            State.get().cart.set({
                status: 'ready',
                products: []
            });
        });
    })
    .on('products:add', function (product) {
        var state = State.get().pivot();
        var cartProduct;

        if (product.inventory > 0) {
            cartProduct = findInCart( state.cart, product.id );
            if (cartProduct) {
                state = cartProduct.set({quantity: cartProduct.quantity + 1});
            }
            else {
                state = state.cart.products.push({
                    id: product.id,
                    title: product.title,
                    quantity: 1,
                    price: product.price
                });
            }

            product.set({inventory: product.inventory - 1});
        }
    });

function findInCart (cart, id) {
    var found = false;
    var i = 0;
    var cartProduct;

    while (!found && i < cart.products.length) {
        cartProduct = cart.products[i++];
        if (cartProduct.id === id) {
            found = cartProduct;
        }
    }

    return found;
}
