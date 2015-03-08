'use strict';

var React = require('react');
var Reflux = require('reflux')
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var ProductStore = require('../stores/ProductStore');
var ActionCreators = require('../actions/ActionCreators');


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
    mixins: [
      Reflux.connect(ProductStore, 'products'),
    ],

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList title="Flux Shop Demo (Reflux)">
                {nodes}
            </ProductsList>
        );
    },

});

module.exports = ProductsListContainer;
