import React from 'react';
import App from './components/App.jsx';
import { Context } from 'fluxette';
import flux, { dispatch } from './flux';
import { API } from './flux/types';
import { getProducts } from './flux/async';

flux.hook((state, actions) => {
    let [bought] = actions.filter(a => a.type === API.CHECKOUT.DONE);
    if (bought) {
        let { products } = bought;
        console.log('YOU BOUGHT:', Object.keys(products).map(key => products[key]));
    }
});

dispatch(getProducts);

React.render(
    <Context flux={ flux }>
        { () => <App /> }
    </Context>,
    document.getElementById('app')
);
