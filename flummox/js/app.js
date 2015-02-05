'use strict';

import React from 'react';
import Flux from './Flux'
import App from './components/App.jsx';

// On the server, we would create a new Flux instance on every request
let flux = new Flux();
let actions = flux.getActions('app');

actions.getAllProducts();

// You could also use React's contexts to expose flux to arbitrarily
// deep components, but here we're just passing it as a prop.
React.render(
    React.createElement(App, { flux }),
    document.getElementById('flux-app')
);
