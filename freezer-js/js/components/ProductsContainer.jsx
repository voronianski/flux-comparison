'use strict';

var React = require('react');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');

var State = require('../State');

var ProductsListContainer = React.createClass({
    onAddToCartClicked: function (product) {
        return function () {
            State.trigger('products:add', product);
        };
    },

    render: function () {
        var me = this;
        var nodes = this.props.products.map(function (product) {
            return (
                <ProductItem
                    key={product.id}
                    product={product}
                    onAddToCartClicked={me.onAddToCartClicked(product)} />
            );
        });

        return (
            <ProductsList title="Flux Shop Demo (Freezer)">
                {nodes}
            </ProductsList>
        );
    }
});

module.exports = ProductsListContainer;
