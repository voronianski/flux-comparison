'use strict';

var React = require('react');
var State = require('../State');
var ProductsContainer = require('./ProductsContainer.jsx');
var CartContainer = require('./CartContainer.jsx');

var App = React.createClass({
    render: function () {
        var state = State.get();

        if (state.status == 'loading') {
            return <div>Loading</div>;
        }

        return (
            <div>
                <ProductsContainer products={state.products} />
                <CartContainer cart={state.cart} />
            </div>
        );
    },

    componentDidMount: function () {
        var me = this;

        // Make the app reactive
        State.on('update', function () {
            me.forceUpdate();
        });
    }
});

module.exports = App;
