import React from 'react';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

let ProductItemContainer = React.createClass({

    onAddToCartClicked() {
        let { context } = this.props;
        context.appAction.addToCart(this.props.product);
    },

    render() {
        return (
            <ProductItem
                product={this.props.product}
                onAddToCartClicked={this.onAddToCartClicked}
            />
        );
    }

});

let ProductsListContainer = React.createClass({
    _getStateFromStores(){
        let { context } = this.props;
        return {
            products: context.productsStore.getProducts()
        };
    },

    getInitialState: function () {
        return this._getStateFromStores();
    },

    _onChange: function () {
        this.setState(this._getStateFromStores());
    },

    componentDidMount: function () {
        let { context } = this.props;
        context.productsStore.onChange(this._onChange);
    },

    componentWillUnmount: function () {
        let { context } = this.props;
        context.productsStore.removeChangeListener(this._onChange);
    },

    render() {
        let nodes = this.state.products.map(product => {
            return (
                <ProductItemContainer
                    context={this.props.context}
                    key={product.id}
                    product={product}
                />
            );
        });

        return (
            <ProductsList title="Flux Shop Demo (material-flux)">
                {nodes}
            </ProductsList>
        );
    }
});

export default ProductsListContainer;
