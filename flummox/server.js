import React from 'react';
import express from 'express';
import path from 'path';

import App from './js/components/App.jsx';
import Flux from './js/Flux';

let app = express();

// Static directories to make css and js work
app.use('/build', express.static(path.join(__dirname, 'build')));
app.use('/common', express.static(path.join(__dirname, '..', 'common')));

// I pulled this from index.html
let htmlStart = `
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Flummox Flux Sample</title>

    <link rel="shortcut icon" type="image/png" href="../common/assets/react.png">
    <link rel="stylesheet" href="../common/css/uikit.almost-flat.min.css">
    <link rel="stylesheet" href="../common/css/main.css">
</head>
<body>
  <div id="flux-app">
`;
let htmlEnd =  `
  </div>
  <script src="build/bundle.js"></script>
</body>
</html>
`;

app.get('/', (req, res) => {

  /**
   *  Isomorphism with Flummox:
   *
   *  1. Create a new Flux instance on each request.
   *  2. Done! :)
   *
   *  See a more complex example with React Router here (WIP):
   *  https://github.com/acdlite/flummox-isomorphic-demo
   */
  let flux = new Flux();

  let actions = flux.getActions('app');

  async function render() {
    await actions.getAllProducts();

    let appMarkup = React.renderToString(<App flux={flux} />);
    let html = htmlStart + appMarkup + htmlEnd;

    res.send(html);
  }().catch(e => res.send(e.stack));

});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
