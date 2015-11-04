'use strict';

require('es5-shim');
require('es5-shim/es5-sham');
require('babel/polyfill');

var React = require('react');
var lux = require('lux.js');
var App = require('./components/App.jsx');
require('./utils/WebAPIUtils');

lux.publishAction('getAllProducts');

/*
    an alternative to publishing the action
    might be if you have an app-level API:

    var appApi = lux.actionCreator({
        getActions: ['getAllProducts']
    });

    appApi.getAllProducts();

*/

React.render(
    React.createElement(App, null),
    document.getElementById('flux-app')
);

// Some useful lux util methods:
// (you'll need to put lux on the window to use them in the console)
// lux.utils.printActions();
// lux.utils.printStoreDepTree();
// lux.utils.printStoreDepTree('addToCart');
