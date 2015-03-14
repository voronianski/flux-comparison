import { Action } from 'material-flux';
import { checkoutProducts, getAllProducts } from '../utils/WebAPIUtils';
export var keys = {
    'getAllProducts': 'getAllProducts',
    'receiveProducts': 'receiveProducts',
    'addToCart': 'addToCart',
    'beginCheckout': 'beginCheckout',
    'finishCheckout': 'finishCheckout'
};
export default class AppAction extends Action {

    getAllProducts() {
        getAllProducts().then((products)=> {
            this.dispatch(keys.getAllProducts, this.receiveProducts(products));
        });
    }

    receiveProducts(products) {
        this.dispatch(keys.receiveProducts, products);
    }

    addToCart(product) {
        this.dispatch(keys.addToCart, product);
    }

    cartCheckout(products) {
        this.beginCheckout();

        checkoutProducts(products).then((products)=> {
            this.finishCheckout(products);
        });
    }

    beginCheckout() {
        this.dispatch(keys.beginCheckout, true);
    }

    finishCheckout(products) {
        this.dispatch(keys.finishCheckout, products);
    }

}
