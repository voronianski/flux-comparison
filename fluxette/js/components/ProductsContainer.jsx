import React from 'react';
import { dispatch, connect } from '../flux';
import { cart } from '../flux/creators';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

class ProductItemContainer extends React.Component {
    onAddToCartClicked() {
        dispatch(cart.add(this.props.product));
    }
    render() {
        return <ProductItem product={ this.props.product } onAddToCartClicked={ ::this.onAddToCartClicked } />;
    }
}

@connect(state => {
    let { products } = state;
    return Object.keys(products).map(key => products[key]);
}, 'products')
export default class extends React.Component {
    render() {
        let productNodes = this.state.products.map(product =>
            <ProductItemContainer key={ product.id } product={ product } />);
        return <ProductsList title="Flux Shop Demo (Fluxette)">{ productNodes }</ProductsList>;
    }
}
