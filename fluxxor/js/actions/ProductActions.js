import ProductConstants from '../constants/ProductConstants';
import CartConstants from '../constants/CartConstants';
import { getAllProducts } from '../utils/WebAPIUtils';

export default {
    addToCart(product) {
        this.dispatch(CartConstants.ADD_TO_CART, product);
    },

    receiveProducts(products) {
        this.dispatch(ProductConstants.RECEIVE_PRODUCTS, products);
    },

    getAllProducts() {

        getAllProducts()
            .then((products) => {
                this.dispatch(ProductConstants.RECEIVE_PRODUCTS, products);
            });
    }
};
