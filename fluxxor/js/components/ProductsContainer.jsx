import React, { Component, PropTypes } from 'react';
import connect from '../utils/Connect';

import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

class ProductItemContainer extends Component {
    constructor(props) {
        super(props);

        this.onAddToCartClicked = this.onAddToCartClicked.bind(this);
    }

    onAddToCartClicked() {
        this.props.flux.actions.product.addToCart(this.props.product);
    }

    render() {
        return (
            <ProductItem
                product={this.props.product}
                onAddToCartClicked={this.onAddToCartClicked}
            />
        );
    }
}

ProductItemContainer.propTypes = {
    product: PropTypes.shape({
        inventory: PropTypes.number
    })
};

class ProductsListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const nodes = this.props.products.map(product => {
            return (
                <ProductItemContainer
                    flux={this.props.flux}
                    key={product.id}
                    product={product}
                />
            );
        });

        return (
            <ProductsList title="Flux Shop Demo (Fluxxor)">
                {nodes}
            </ProductsList>
        );
    }
}

ProductsListContainer.propTypes = {
    products: PropTypes.array.isRequired
};

export default connect(ProductsListContainer, ['productStore'], (flux, props, state) => {
    const productState = flux.store('productStore').getState();
    return productState;
});
