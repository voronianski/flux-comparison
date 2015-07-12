import React from 'react';
import { connect } from 'redux/react';
import * as ActionCreators from '../actions/ActionCreators';
import ProductsContainer from './ProductsContainer.jsx';
import CartContainer from './CartContainer.jsx';

@connect(() => ({}))
export default class App {
    componentDidMount() {
        this.props.dispatch(ActionCreators.getAllProducts());
    }

    render() {
        return (
            <div>
                <ProductsContainer />
                <CartContainer />
            </div>
        );
    }
};
