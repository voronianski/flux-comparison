import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/ActionCreators';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

@connect(() => ({}))
class ProductItemContainer {
    onAddToCartClicked() {
        return addToCart(this.props.product);
    }

    render() {
        const { product, dispatch } = this.props;

        return (
            <ProductItem
                product={product}
                {...bindActionCreators({
                    // es7 bind syntax (https://github.com/zenparsing/es-function-bind)
                    onAddToCartClicked: ::this.onAddToCartClicked
                }, dispatch)}
            />
        );
    }
}

@connect(state => ({
    // named in stores/index.js
    products: state.products
}))
export default class ProductsListContainer {
    render() {
        const { products } = this.props;

        const nodes = Object.keys(products).map(id => {
            const product = products[id];
            return (
                <ProductItemContainer
                    key={product.id}
                    product={product}
                />
            );
        });

        return (
            <ProductsList title="Flux Shop Demo (Redux)">
                {nodes}
            </ProductsList>
        );
    }
}
