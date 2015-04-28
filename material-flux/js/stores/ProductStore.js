import { Store } from 'material-flux';
import { keys } from '../actions/Actions';

export default class ProductStore extends Store {
    constructor(context) {
        super(context);

        this.register(keys.addToCart, this.handleAddToCart);
        this.register(keys.receiveProducts, this.handleReceiveProducts);

        this.state = {
            products: {}
        };
    }

    handleAddToCart(product) {
        let products = Object.assign({}, this.state.products);

        product.inventory = product.inventory > 0 ? product.inventory - 1 : 0;

        products[product.id] = product;
        this.setState({ products });
    }

    handleReceiveProducts(newProducts) {
        let products = Object.assign({}, this.state.products);

        for (let product of newProducts) {
            products[product.id] = product;
        }

        this.setState({ products });
    }

    getProducts() {
        return Object.keys(this.state.products).map(
            id => this.state.products[id]
        );
    }
}
