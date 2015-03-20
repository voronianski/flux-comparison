import React from 'react';
import Cart from '../../../common/components/Cart.jsx';

let CartContainer = React.createClass({
    _getStateFromStores(){
        let { context } = this.props;
        return {
            products: context.cartStore.getProducts(),
            total: context.cartStore.getTotal()
        };
    },

    getInitialState: function () {
        return this._getStateFromStores();
    },

    _onChange: function () {
        this.setState(this._getStateFromStores());
    },

    componentDidMount: function () {
        let { context } = this.props;
        context.cartStore.onChange(this._onChange);
    },

    componentWillUnmount: function () {
        let { context } = this.props;
        context.cartStore.removeChangeListener(this._onChange);
    },

    onCheckoutClicked() {
        if (!this.state.products.length) {
            return;
        }
        let { context } = this.props;
        context.appAction.cartCheckout(this.state.products);
    },

    render() {
        return (
            <Cart
                products={this.state.products}
                total={this.state.total}
                onCheckoutClicked={this.onCheckoutClicked}
            />
        );
    }
});

export default CartContainer;
