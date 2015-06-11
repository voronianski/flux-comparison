'use strict';

import React from 'react'

import ProductItem from '../../../common/components/ProductItem.jsx'
import ProductsList from '../../../common/components/ProductsList.jsx'

import reactor from '../reactor'
import getters from '../getters'
import actions from '../actions'


const ProductItemContainer = React.createClass({
    onAddToCartClicked: function () {
        actions.addToCart(this.props.product);
    },

    render: function () {
        return (
            <ProductItem product={this.props.product} onAddToCartClicked={this.onAddToCartClicked} />
        );
    }
});

export default React.createClass({
    mixins: [reactor.ReactMixin],

    getDataBindings() {
        return {
            products: getters.products,
        }
    },

    render: function () {
        return (
            <ProductsList title="Flux Shop Demo (NuclearJS)">
                {this.state.products.map(product => {
                    return <ProductItemContainer key={product.id} product={product} />;
                })}
            </ProductsList>
        );
    },
});
