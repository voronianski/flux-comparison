import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { connectActionSetsToStore } from 'flambeau/redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './reducers';
//import { getAllProducts } from './actions';
import actionSets from './actions';
import App from './components/App.jsx';

const middleware = process.env.NODE_ENV === 'production' ?
  [thunk] :
  [thunk, logger()];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const connectedActionSets = connectActionSetsToStore({ actionSets, store });

connectedActionSets.Products.getAllProducts();

React.render(
    <Provider store={store}>
        {() => <App connectedActionSets={connectedActionSets} />}
    </Provider>,
    document.getElementById('redux-flambeau-app')
);
