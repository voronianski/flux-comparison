'use strict';

var React = require('react');
var lux = require('lux.js');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var products = require('../stores/ProductStore');

var ProductItemContainer = React.createClass({

    mixins: [lux.reactMixin.actionCreator],

    getActions: ['addToCart'],

    onAddToCartClicked: function () {
        this.addToCart(this.props.product);
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

function getAllProducts() {
    return {
        products: products.getAllProducts()
    };
}

var ProductsListContainer = React.createClass({

    mixins: [lux.reactMixin.store],

    stores: {
        listenTo: ['products'],
        onChange: function() {
            this.setState(getAllProducts());
        }
    },

    getInitialState: function () {
        return getAllProducts();
    },

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItemContainer key={product.id} product={product} />;
        });

        return (
            <ProductsList title='Flux Shop Demo (Lux)'>
                {nodes}
            </ProductsList>
        );
    }
});

module.exports = ProductsListContainer;
