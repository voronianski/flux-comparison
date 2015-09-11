import Constants from '../constants/CartConstants';
import Fluxxor from 'Fluxxor';
import assign from 'object-assign';

const products = new Map();

const CartStore = Fluxxor.createStore({

    initialize() {
        this.bindActions(
            Constants.ADD_TO_CART, this.onAddToCart,
            Constants.CART_CHECKOUT, this.onCartCheckout,
            Constants.SUCCESS_CHECKOUT, this.onSuccessCheckout
        );
    },

    onAddToCart(product) {
        const id = product.id;
        product.quantity = products.has(id) ? products.get(id).quantity + 1 : 1;
        products.set(id, assign({}, product));
        this.emit('change');
    },

    onCartCheckout() {
        products.clear();
        this.emit('change');
    },

    onSuccessCheckout(products) {
        // this can be used to redirect to success page, etc.
        console.log('YOU BOUGHT:', products);
    },

    getState() {
        let total = 0;
        for (let product of products.values()) {
            total += product.price * product.quantity;
        }
        total = total.toFixed(2);

        return { products, total };
    }
});

export default CartStore;
