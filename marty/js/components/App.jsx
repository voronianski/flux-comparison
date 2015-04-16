'use strict';

var React = require('react');
var CartContainer = require('./CartContainer.jsx');
var ProductsContainer = require('./ProductsContainer.jsx');

var App = React.createClass({
    render() {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
});

module.exports = App;
