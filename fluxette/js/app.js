import React from 'react';
import App from './components/App.jsx';
import { Mapware } from 'fluxette';
import { hook } from './flux';
import { API } from './flux/types';
import { getProducts } from './flux/async';

hook(Mapware({
    [API.CHECKOUT.DONE]: action => {
        let { products } = action;
        console.log('YOU BOUGHT:', Object.keys(products).map(key => products[key]));
    }
}));

getProducts();

React.render(<App />, document.getElementById('app'));
