'use strict';

require('es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var App = require('./components/App.jsx');
var State = require('./State');

require('./reactions/ProductsReactions');
State.trigger('products:fetch');

React.render(
    React.createElement(App, null),
    document.getElementById('flux-app')
);
