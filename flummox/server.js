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
   */
  let flux = new Flux();

  let actions = flux.getActions('app');

  async function render() {
    await actions.getAllProducts();

    let appMarkup = React.renderToString(<App flux={flux} />);
    let html = htmlStart + appMarkup + htmlEnd;

    res.send(html);
  }().catch(e => res.send(e.stack));

    // // Pull all the products using our WebAPIUtils
    // // we have wrapped them up in promises but this interface can be anything
    // // else: callbacks, generators, async/await.
    // WebAPIUtils.getAllProducts().then((products) => {
    //
    //     // There are two ways we can get the data in at this point
    //     // we can fire off the action which we're sure is a synchronous op
    //     // or we can use alt's bootstrap which is also synchronous.
    //     //
    //     // We prepare the data that we want to bootstrap our stores with
    //     // and run `alt.bootstrap`
    //     let data = { ProductStore: { products } };
    //     alt.bootstrap(JSON.stringify(data));
    //
    //     // This creates the markup that we'll use to pass into Iso
    //     let markup = React.renderToString(React.createElement(App));
    //
    //     // here we use `alt.flush` in order to flush the data out of the stores
    //     // for the next request.
    //     let body = Iso.render(markup, alt.flush());
    //
    //     // and we send down the markup
    //     res.send(`${htmlStart}${body}${htmlEnd}`);
    // }).catch((e) => {
    //     // Naive error handling in case something goes wrong
    //     res.send(e.stack);
    // });
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
