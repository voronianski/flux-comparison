'use strict';

var React = require('react');
var Marty = require('marty');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var ProductStore = require('../stores/ProductStore');
var CartActionCreators = require('../actions/cartActionCreators');

var ProductsState = Marty.createStateMixin({
    listenTo: ProductStore,

    getState: function () {
        return {
            products: ProductStore.getAllProducts()
        };
    }
});

var ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        CartActionCreators.addToCart(this.props.product);
    },

    render: function () {
        console.log(this.props.product);
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({
    mixins: [ProductsState],

    render: function () {
        return (
            <ProductsList title="Flux Shop Demo (Marty)">
                {this.renderProducts()}
            </ProductsList>
        );
    },

    renderProducts: function () {
        return this.state.products.when({
            pending: function () {
                return this.done([]);
            },
            failed: function (error) {
                return <div className="error">{error}</div>;
            },
            done: function (products) {
                return products.map(function (product) {
                    return <ProductItemContainer key={product.id} product={product} />;
                });
            }
        });
    }
});

module.exports = ProductsListContainer;
