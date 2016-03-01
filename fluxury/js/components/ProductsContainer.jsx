'use strict';

var React = require('react');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var ProductStore = require('../stores/ProductStore');
var ActionCreators = require('../actions/ActionCreators');
var connectStoreMixin = require('react-fluxury').connectStoreMixin;

var ProductItemContainer = React.createClass({

    onAddToCartClicked: function () {
        ActionCreators.addToCart(this.props.product);
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({

    mixins: [connectStoreMixin(
        ProductStore,
        state => state
    )],

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList title="Flux Shop Demo (Facebook)">
                {nodes}
            </ProductsList>
        );
    }

});

module.exports = ProductsListContainer;
