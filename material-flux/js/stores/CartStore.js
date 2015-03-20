import { Store } from 'material-flux';
import { keys } from '../actions/Actions';

export default class CartStore extends Store {

    constructor(context) {
        super(context);
        this.context = context;
        this.register(keys.addToCart, this.handleAddToCart);
        this.register(keys.beginCheckout, this.handleBeginCheckout);
        this.register(keys.finishCheckout, this.handleFinishCheckout);

        this.state = {
            products: {}
        };
    }

    handleAddToCart(product) {
        this.waitFor(this.context.productsStore);

        let products = Object.assign({}, this.state.products);

        let { id } = product;
        product.quantity = id in products ? products[id].quantity + 1 : 1;

        products[id] = Object.assign({}, products[id], product);

        this.setState({ products });
    }

    handleBeginCheckout(products) {
        this.setState({ products: {} });
    }

    handleFinishCheckout(products) {
        // this can be used to redirect to success page, etc.
        console.log('YOU BOUGHT:', products);
    }

    getProducts() {
        return Object.keys(this.state.products).map(
            id => this.state.products[id]
        );
    }

    getTotal() {
        let { products } = this.state;
        let total = 0;

        for (let id in products) {
            let product = products[id];
            total += product.price * product.quantity;
        }

        return total.toFixed(2);
    }

}
