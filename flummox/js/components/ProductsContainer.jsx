'use strict';

import React from 'react';
import FluxMixin from 'flummox/mixin';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

let ProductItemContainer = React.createClass({

    onAddToCartClicked() {
        this.props.flux.getActions('app').addToCart(this.props.product);
    },

    render() {
        return (
            <ProductItem
                product={this.props.product}
                onAddToCartClicked={this.onAddToCartClicked}
            />
        );
    },

});

let ProductsListContainer = React.createClass({

    mixins: [FluxMixin({
        products: store => ({
            products: store.getProducts(),
        })
    })],

    render() {
        let nodes = this.state.products.map(product => {
            return (
                <ProductItemContainer
                    flux={this.props.flux}
                    key={product.id}
                    product={product}
                />
            );
        });

        return (
            <ProductsList title="Flux Shop Demo (Flummox)">
                {nodes}
            </ProductsList>
        );
    },

});

export default ProductsListContainer;
