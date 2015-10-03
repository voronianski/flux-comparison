'use strict';

var Freezer = require('freezer-js');

var State = new Freezer({
	status: 'loading',
	cart: {
        status: 'ready',
        products: []
    },
	products: []
});

module.exports = State;
