import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores/index';
import * as ActionCreators from './actions/ActionCreators';
import App from './components/App.jsx';

const redux = createRedux(stores);

redux.dispatch(ActionCreators.getAllProducts());

React.render(
    <Provider redux={redux}>
        {() => <App />}
    </Provider>,
    document.getElementById('flux-app')
);
