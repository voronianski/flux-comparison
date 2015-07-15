'use strict';

import 'es5-shim';
import 'es5-shim/es5-sham';

import actions from './actions';

import React from 'react';
import App from './components/App.jsx';

actions.fetchProducts();

React.render(
    React.createElement(App, null),
    document.getElementById('flux-app')
);
