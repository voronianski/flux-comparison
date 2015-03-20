import React from 'react';
import Context from './Context';
import App from './components/App.jsx';

let context = new Context();
let action = context.appAction;

action.getAllProducts();

// We're just passing `context` as a prop.
React.render(
    React.createElement(App, { context }),
    document.getElementById('flux-app')
);
