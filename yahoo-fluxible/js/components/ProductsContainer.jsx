'use strict';

var React = require('react/addons');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var StoreMixin = require('fluxible').StoreMixin;
var ProductStore = require('../stores/ProductStore');
var addToCart = require('../actions/addToCart');

var ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        this.props.context.executeAction(addToCart, {
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
    mixins: [StoreMixin],

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
        var context = this.props.context;
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} context={context} />;
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
