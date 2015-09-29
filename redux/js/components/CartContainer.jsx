import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { beginCheckout } from '../actions/ActionCreators';
import { getTotal } from '../reducers/cart';
import Cart from '../../../common/components/Cart.jsx';

class CartContainer {
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
                    onCheckoutClicked: this.onCheckoutClicked.bind(this)
                }, dispatch)}
            />
        );
    }
}

export default connect(state => {
    return {
        products: Object.keys(state.cart).map(key => state.cart[key]),
        total: getTotal(state.cart)
    };
})(CartContainer);
