import Constants from '../constants/CartConstants';
import { checkoutProducts } from '../utils/WebAPIUtils';

export default {
    cartCheckout(products) {
        this.dispatch(Constants.CART_CHECKOUT);

        checkoutProducts(products)
            .then(products => {
                this.dispatch(Constants.SUCCESS_CHECKOUT, products);
            });
    }
};

