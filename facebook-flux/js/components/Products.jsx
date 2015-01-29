'use strict';

var React = require('react');
var ProductStore = require('../stores/ProductStore');
var ActionCreators = require('../actions/ActionCreators');

function _getStateFromStores () {
    return {
        products: ProductStore.getAllProducts()
    };
}

var ProductItem = React.createClass({
    addToCart: function () {
        ActionCreators.addToCart(this.props.product);
    },

    render: function () {
        var product = this.props.product;

        return (
            <div className="uk-panel uk-panel-box">
                <img className="uk-thumbnail uk-thumbnail-mini" src={product.image} />
                <h3 className="uk-h4">{product.title} - &euro;{product.price}</h3>
                <button className="uk-button uk-button-small uk-button-primary" onClick={this.addToCart}>
                    Add to cart
                </button>
            </div>
        );
    }
});

var ProductsList = React.createClass({
    getInitialState: function () {
        return _getStateFromStores();
    },

    componentDidMount: function () {
        ProductStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        ProductStore.removeChangeListener(this._onChange);
    },

    render: function () {
        var nodes = this.state.products.map(function (product) {
            return <ProductItem key={product.id} product={product} />;
        });

        return (
            <div className="shop-wrap">
                <h1 className="uk-h2">Products in our shop:</h1>
                <div>{nodes}</div>
            </div>
        );
    },

    _onChange: function () {
        this.setState(_getStateFromStores());
    }
});

module.exports = ProductsList;
