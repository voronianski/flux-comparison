'use strict';

var alt = require('../alt');
var WebAPIUtils = require('../utils/WebAPIUtils');

class ActionsCreators {
    constructor() {
        this.generateActions(
            'receiveProducts',
            'addToCart',
            'finishCheckout'
        );
    }

    cartCheckout(products) {
        this.dispatch(products);
        WebAPIUtils.checkoutProducts(products);
    }
}

alt.createActions(ActionsCreators, exports);
