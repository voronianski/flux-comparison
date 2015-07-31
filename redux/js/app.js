import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/index';
import * as ActionCreators from './actions/ActionCreators';
import App from './components/App.jsx';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(reducer);
store.dispatch(ActionCreators.getAllProducts());

React.render(
    <Provider store={store}>
        {() => <App />}
    </Provider>,
    document.getElementById('redux-app')
);
