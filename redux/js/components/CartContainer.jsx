import React from 'react'; // eslint-disable-line no-unused-vars
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import { beginCheckout } from '../actions/ActionCreators';
import { getTotal } from '../stores/CartStore';
import Cart from '../../../common/components/Cart.jsx';

@connect(state => {
    return {
        products: Object.keys(state.cart).map(key => {
            let product = state.cart[key];

            // inventory shouldnt be known in cart
            delete product.inventory;
            return product;
        }),
        total: getTotal(state.cart)
    };
})
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
                    // es7 bind syntax (https://github.com/zenparsing/es-function-bind)
                    onCheckoutClicked: ::this.onCheckoutClicked
                }, dispatch)}
            />
        );
    }
}
