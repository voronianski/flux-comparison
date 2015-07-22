import React from 'react';
import { connect } from '../flux';
import { buyProducts } from '../flux/async';
import Cart from '../../../common/components/Cart.jsx';

@connect(state => state.cart, 'cart')
export default class extends React.Component {
    render() {
        let { cart } = this.state;
        cart = Object.keys(cart).map(key => cart[key]);
        let total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2);
        return <Cart products={ cart } total={ total } onCheckoutClicked={ buyProducts } />;
    }
}
