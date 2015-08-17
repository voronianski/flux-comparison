import React from 'react';
import App from './components/App.jsx';
import { Context } from 'fluxette';
import flux from './flux';
import { API } from './flux/types';
import { getProducts } from './flux/async';

flux.hook((state, actions) => {
    actions.forEach(action => {
        if (action.type === API.CHECKOUT.DONE) {
            let { products } = action;
            console.log('YOU BOUGHT:', Object.keys(products).map(key => products[key]));
        }
    });
});

getProducts(flux)();

React.render(
    <Context flux={ flux }>
        { () => <App /> }
    </Context>,
    document.getElementById('app')
);
