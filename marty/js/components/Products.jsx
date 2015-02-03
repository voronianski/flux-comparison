'use strict';

var React = require('react');
var Marty = require('marty');
var ProductStore = require('../stores/ProductStore');
var CartActionCreators = require('../actions/cartActionCreators');

var ProductsState = Marty.createStateMixin({
  listenTo: ProductStore,
  getState: function () {
    return {
      products: ProductStore.getAllProducts()
    }
  }
});

var ProductsList = React.createClass({
    mixins: [ProductsState],
    render: function () {
        return (
            <div className="shop-wrap">
                <h2 className="uk-h2">Flux Shop Demo (Marty)</h2>
                <div>{this.renderProducts()}</div>
            </div>
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
                    return <ProductItem key={product.id} product={product} />;
                });
            }
        })
    }
});

var ProductItem = React.createClass({
    addToCart: function () {
        CartActionCreators.addToCart(this.props.product);
    },
    render: function () {
        var product = this.props.product;
        var label = product.inventory > 0 ? 'Add to cart' : 'Sold Out';

        return (
            <div className="uk-panel uk-panel-box uk-margin-bottom">
                <img className="uk-thumbnail uk-thumbnail-mini uk-align-left" src={product.image} />
                <h4 className="uk-h4">{product.title} - &euro;{product.price}</h4>
                <button className="uk-button uk-button-small uk-button-primary"
                    onClick={this.addToCart}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {label}
                </button>
            </div>
        );
    }
});


module.exports = ProductsList;
