'use strict';

var React = require('react');
var CartContainer = require('./CartContainer.jsx');
var ProductsContainer = require('./ProductsContainer.jsx');
var FluxibleMixin = require('fluxible').Mixin;

var App = React.createClass({
    mixins: [FluxibleMixin],
    render: function () {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
});

module.exports = App;
