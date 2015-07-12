import React from 'react';
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
                    // todo: there must be a nicer way than .bind
                    onAddToCartClicked: this.onAddToCartClicked.bind(this)
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

        let nodes = Object.keys(products).map(id => {
            let product = products[id];
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
};
