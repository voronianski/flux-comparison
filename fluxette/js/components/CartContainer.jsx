import React from 'react';
import { connect, select } from 'fluxette';
import { buyProducts } from '../flux/async';
import Cart from '../../../common/components/Cart.jsx';

@connect(select(
    state => state.cart,
    cart => {
        cart = Object.keys(cart).map(key => cart[key]);
        return {
            cart,
            total: cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)
        };
    }
))
export default class extends React.Component {
    render() {
        let { cart, total } = this.state;
        return <Cart products={ cart } total={ total } onCheckoutClicked={ () => this.context.flux.dispatch(buyProducts) } />;
    }
}
