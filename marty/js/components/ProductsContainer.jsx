'use strict';

var React = require('react');
var Marty = require('marty');
var ProductItem = require('../../../common/components/ProductItem.jsx');
var ProductsList = require('../../../common/components/ProductsList.jsx');
var ProductStore = require('../stores/productStore');
var CartActionCreators = require('../actions/cartActionCreators');

var ProductItemContainer = React.createClass({
    onAddToCartClicked() {
        CartActionCreators.addToCart(this.props.product);
    },

    render() {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

var ProductsListContainer = React.createClass({
    render() {
        return (
            <ProductsList title="Flux Shop Demo (Marty)">
                {this.props.products.map(function (product) {
                    return <ProductItemContainer key={product.id} product={product} />;
                })}
            </ProductsList>
        );
    }
});

module.exports = Marty.createContainer(ProductsListContainer, {
    listenTo: ProductStore,
    fetch: {
        products() {
            return ProductStore.getAllProducts();
        }
    },
    pending() {
        return this.done({
            products: []
        });
    },
    failed(errors) {
        return <div className="error">{error}</div>;
    }
});