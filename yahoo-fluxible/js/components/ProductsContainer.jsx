'use strict';

var React = require('react/addons');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var FluxibleMixin = require('fluxible').Mixin;
var ProductStore = require('../stores/ProductStore');
var addToCart = require('../actions/addToCart');

var ProductItemContainer = React.createClass({
    mixins: [FluxibleMixin],

    onAddToCartClicked: function () {
        this.executeAction(addToCart, {
            product: this.props.product
        });
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({
    mixins: [FluxibleMixin],

    statics: {
        storeListeners: {
            _onChange: [ProductStore]
        }
    },

    _getStateFromStores: function () {
        return {
            products: this.getStore(ProductStore).getAllProducts()
        };
    },

    getInitialState: function () {
        return this._getStateFromStores();
    },

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList title="Flux Shop Demo (Yahoo Fluxible)">
                {nodes}
            </ProductsList>
        );
    },

    _onChange: function () {
        this.setState(this._getStateFromStores());
    }
});

module.exports = ProductsListContainer;
