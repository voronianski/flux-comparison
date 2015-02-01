'use strict';

require('es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var Fluxible = require('fluxible');

var App = require('./components/App.jsx');

var CartStore = require('./stores/CartStore');
var ProductStore = require('./stores/ProductStore');
var receiveProducts = require('./actions/receiveProducts');

var app = new Fluxible();

app.registerStore(CartStore);
app.registerStore(ProductStore);

var context = app.createContext();
context.executeAction(receiveProducts, {}, function (err) {
    if (err) {
        throw err;
    }

    React.render(
        React.createElement(App, {context: context.getComponentContext()}),
        document.getElementById('fluxible-app')
    );
});

