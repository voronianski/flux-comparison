'use strict';

import Flummox from 'flummox';
import Actions from './actions/Actions';
import ProductStore from './stores/ProductStore';
import CartStore from './stores/CartStore';

export default class Flux extends Flummox {

    constructor() {
        super();

        this.createActions('app', Actions);
        this.createStore('products', ProductStore, this);
        this.createStore('cart', CartStore, this);
    }

}
