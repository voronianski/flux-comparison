'use strict';

var React = require('react/addons');
var StoreMixin = require('fluxible').StoreMixin;
var ProductStore = require('../stores/ProductStore');
var addToCart = require('../actions/addToCart');

var ProductItem = React.createClass({
    addToCart: function () {
        this.props.context.executeAction(addToCart, {
            product: this.props.product
        });
    },

    render: function () {
        var product = this.props.product;

        return (
            <div className="uk-panel uk-panel-box uk-margin-bottom">
                <img className="uk-thumbnail uk-thumbnail-mini uk-align-left" src={product.image} />
                <h4 className="uk-h4">{product.title} - &euro;{product.price}</h4>
                <button className="uk-button uk-button-small uk-button-primary"
                    onClick={this.addToCart}
                    disabled={product.inventory > 0 ? '' : 'disabled'}>
                    {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
                </button>
            </div>
        );
    }
});

var ProductsList = React.createClass({
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
        var nodes = this.state.products.map(function (product) {
            return <ProductItem key={product.id} product={product} context={this.props.context} />;
        }.bind(this));

        return (
            <div className="shop-wrap">
                <h2 className="uk-h2">Flux Shop Demo (Yahoo Fluxible)</h2>
                <div>{nodes}</div>
            </div>
        );
    },

    _onChange: function () {
        this.setState(this._getStateFromStores());
    }
});

module.exports = ProductsList;
