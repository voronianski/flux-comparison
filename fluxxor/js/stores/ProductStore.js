import ProductConstants from '../constants/ProductConstants';
import CartConstants from '../constants/CartConstants';
import Fluxxor from 'Fluxxor';

let products = [];
let state = { products };
const ProductStore = Fluxxor.createStore({
    initialize() {
        this.bindActions(
            CartConstants.ADD_TO_CART, this.onAddToCart,
            ProductConstants.RECEIVE_PRODUCTS, this.onReceiveProducts
        );
    },

    decreaseInventory(product) {
        product.inventory = product.inventory > 0 ? product.inventory - 1 : 0;
    },

    onAddToCart(product) {
        this.decreaseInventory(product);
        this.emit('change');
    },

    onReceiveProducts(products) {
        state.products = products;
        this.emit('change');
    },

    getState() {
        return state;
    }
});

export default ProductStore;
