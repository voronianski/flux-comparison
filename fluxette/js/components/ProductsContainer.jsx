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

@connect(state => state.products, 'products')
export default class extends React.Component {
    render() {
        let { products } = this.state;
        products = Object.keys(products).map(key => products[key]);
        let productNodes = products.map(product =>
            <ProductItemContainer key={ product.id } product={ product } />);
        return <ProductsList title="Flux Shop Demo (Fluxette)">{ productNodes }</ProductsList>;
    }
}
