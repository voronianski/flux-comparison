import React from 'react';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from './stores/index';
import App from './components/App.jsx';

const redux = createRedux(stores);

React.render(
    <Provider redux={ redux }>
        {() => <App />}
    </Provider>,
    document.getElementById('flux-app')
);
