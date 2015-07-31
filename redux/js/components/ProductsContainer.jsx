import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addToCart } from '../actions/ActionCreators';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

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
                    onAddToCartClicked: this.onAddToCartClicked.bind(this)
                }, dispatch)}
            />
        );
    }
}

const ConnectedProductItemContainer = connect(() => ({}))(ProductItemContainer);

class ProductsListContainer {
    render() {
        const { products } = this.props;

        const nodes = Object.keys(products).map(id => {
            const product = products[id];
            return (
                <ConnectedProductItemContainer
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

export default connect(state => ({
    // named in stores/index.js
    products: state.products
}))(ProductsListContainer)
