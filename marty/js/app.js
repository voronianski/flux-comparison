'use strict';

require('es5-shim');
require('es5-shim/es5-sham');

var React = require('react');
var App = require('./components/App.jsx');

React.render(
    React.createElement(App, null),
    document.getElementById('marty-app')
);
