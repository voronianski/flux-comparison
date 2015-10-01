'use strict';

var React = require('react');
var App = require('./components/App.jsx');

React.render(
    React.createElement(App, null),
    document.getElementById('marty-app')
);
