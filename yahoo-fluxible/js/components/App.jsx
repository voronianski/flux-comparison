'use strict';

var React = require('react');
var Cart = require('./Cart.jsx');
var Products = require('./Products.jsx');

var App = React.createClass({
    render: function () {
        return (
            <div>
                <Products context={this.props.context} />
                <Cart context={this.props.context} />
            </div>
        );
    }
});

module.exports = App;
