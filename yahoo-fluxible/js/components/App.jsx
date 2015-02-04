'use strict';

var React = require('react');
var CartContainer = require('./CartContainer.jsx');
var ProductsContainer = require('./ProductsContainer.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <ProductsContainer context={this.props.context} />
                <CartContainer context={this.props.context} />
            </div>
        );
    }
});

module.exports = App;
