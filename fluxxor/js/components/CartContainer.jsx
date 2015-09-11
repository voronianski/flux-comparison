import React, { Component, PropTypes } from 'react';
import Cart from '../../../common/components/Cart.jsx';
import connect from '../utils/Connect';

class CartContainer extends Component {
    constructor(props) {
        super(props);

        this.onCheckoutClicked = this.onCheckoutClicked.bind(this);
    }

    onCheckoutClicked() {
        if (!this.props.products.length) {
            return;
        }
        this.props.flux.actions.cart.cartCheckout(this.props.products);
    }

    render() {
        return (
            <Cart
                products={this.props.products}
                total={this.props.total}
                onCheckoutClicked={this.onCheckoutClicked}
            />
        );
    }
}

CartContainer.propTypes = {
    flux: PropTypes.object.isRequired,
    products: PropTypes.array,
    total: PropTypes.string
};

export default connect(CartContainer, ['cartStore'], (flux, props, state) => {
    const cartStoreState = flux.store('cartStore').getState();
    return {
        products: [...cartStoreState.products.values()],
        total: cartStoreState.total
    };
});
