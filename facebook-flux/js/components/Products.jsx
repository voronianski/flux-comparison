var React = require('react');
var ProductStore = require('../stores/ProductStore');
var ActionCreators = require('../ActionCreators');

function getStateFromStores () {
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
            <div>
                <div>{product.title} - &euro;{product.price}</div>
                <button onClick={this.addToCart}>Add to cart</button>
            </div>
        );
    }
});

var ProductsList = React.createClass({
    getInitialState: function () {
        return getStateFromStores();
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
            <div>
                <h3>Products in our shop:</h3>
                <div>{nodes}</div>
            </div>
        );
    },

    _onChange: function () {
        this.setState(getStateFromStores());
    }
});

module.exports = ProductsList;
