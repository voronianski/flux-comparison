import React from 'react';
import { connect, select } from 'fluxette-react';
import { cart } from '../flux/actions';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

@connect(select(
    state => state.products,
    products => ({
        products: Object.keys(products).map(key => products[key])
    })
))
export default class extends React.Component {
    render() {
        let { dispatch } = this;
        let productNodes = this.state.products.map(product =>
            <ProductItem
                key={ product.id }
                product={ product }
                onAddToCartClicked={ () => dispatch(cart.add(product)) }
            />);
        return <ProductsList title="Flux Shop Demo (Fluxette)">{ productNodes }</ProductsList>;
    }
}
