var React = require('react');
var App = require('./components/App.jsx');
var WebAPIUtils = require('./utils/WebAPIUtils');

WebAPIUtils.getAllProducts();

React.render(
    React.createElement(App, null),
    document.getElementById('flux-app')
);
