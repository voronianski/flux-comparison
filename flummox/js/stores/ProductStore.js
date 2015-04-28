import { Store } from 'flummox';

export default class ProductStore extends Store {
    constructor(flux) {
        super();

        let actionIds = flux.getActionIds('app');
        this.register(actionIds.addToCart, this.handleAddToCart);
        this.register(actionIds.receiveProducts, this.handleReceiveProducts);

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
