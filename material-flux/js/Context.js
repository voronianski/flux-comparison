import { Context } from 'material-flux';
import Actions from './actions/Actions';
import ProductStore from './stores/ProductStore';
import CartStore from './stores/CartStore';

export default class AppContext extends Context {
    constructor() {
        super();
        this.appAction = new Actions(this);
        this.productsStore = new ProductStore(this);
        this.cartStore = new CartStore(this);
    }
}
