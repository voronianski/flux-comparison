import React from 'react';
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import { beginCheckout } from '../actions/ActionCreators';
import { getTotal } from '../stores/CartStore';
import Cart from '../../../common/components/Cart.jsx';

@connect(state => ({
    products: Object.keys(state.cart).map(key => state.cart[key]),
    total: getTotal(state.cart)
}))
export default class CartContainer {
    onCheckoutClicked() {
        return beginCheckout(this.props.products);
    }

    render() {
        const { products, total, dispatch } = this.props;

        return (
            <Cart
                products={products}
                total={total}
                {...bindActionCreators({
                    // todo: there must be a nicer way than .bind
                    onCheckoutClicked: this.onCheckoutClicked.bind(this)
                }, dispatch)}
            />
        );
    }
}
