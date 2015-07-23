import React from 'react';
import { connect } from '../flux';
import { buyProducts } from '../flux/async';
import Cart from '../../../common/components/Cart.jsx';

@connect(state => {
    let { cart } = state;
    cart = Object.keys(cart).map(key => cart[key]);
    return {
        cart,
        total: cart.reduce((sum, product) => sum + product.price * product.quantity, 0).toFixed(2)
    };
})
export default class extends React.Component {
    render() {
        let { cart, total } = this.state.flux;
        return <Cart products={ cart } total={ total } onCheckoutClicked={ buyProducts } />;
    }
}
