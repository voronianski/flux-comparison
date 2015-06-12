import shop from '../../common/api/shop'
import reactor from './reactor'
import getters from './getters'
import {
    RECEIVE_PRODUCTS,
    ADD_TO_CART,
    CHECKOUT_START,
    CHECKOUT_SUCCESS,
    CHECKOUT_FAILED,
} from './action-types'

export default {
    fetchProducts() {
        shop.getProducts(products => {
            reactor.dispatch(RECEIVE_PRODUCTS, { products })
        });
    },

    addToCart(product) {
        reactor.dispatch(ADD_TO_CART, { product })
    },

    cartCheckout() {
        const productsInCart = reactor.evaluateToJS(getters.cartProducts)

        reactor.dispatch(CHECKOUT_START)

        shop.buyProducts(productsInCart, () => {
            console.log("YOU BOUGHT: ", productsInCart)

            reactor.dispatch(CHECKOUT_SUCCESS)

            // uncomment out to see a rollback when a checkout fails
            //setTimeout(() => {
                //reactor.dispatch(CHECKOUT_FAILED)
            //}, 1000)
        });
    },
}
