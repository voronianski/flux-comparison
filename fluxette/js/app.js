import React from 'react';
import App from './components/App.jsx';
import { Context } from 'fluxette-react';
import flux from './flux';
import { api } from './flux/actions';

flux.dispatch(api.getProducts);

React.render(
    <Context flux={ flux }>
        { () => <App /> }
    </Context>,
    document.getElementById('app')
);
