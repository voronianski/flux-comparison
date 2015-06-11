import actionTypes from './action-types'
import reactor from './reactor'
import getters from './getters'
import shop from '../../common/api/shop'

export default {
    fetchProducts() {
        shop.getProducts(products => {
            reactor.dispatch(actionTypes.RECEIVE_PRODUCTS, { products })
        });
    },

    addToCart(product) {
        reactor.dispatch(actionTypes.ADD_TO_CART, { product })
    },

    cartCheckout() {
        const productsInCart = reactor.evaluateToJS(getters.cartProducts)

        reactor.dispatch(actionTypes.CHECKOUT_START)

        shop.buyProducts(productsInCart, () => {
            console.log("YOU BOUGHT: ", productsInCart)

            reactor.dispatch(actionTypes.CHECKOUT_SUCCESS)

            // uncomment out to see a rollback when a checkout fails
            //setTimeout(() => {
                //reactor.dispatch(actionTypes.CHECKOUT_FAILED)
            //}, 1000)
        });
    },
}
