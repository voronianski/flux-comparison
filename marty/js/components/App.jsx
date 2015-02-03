'use strict';

var React = require('react');
var Cart = require('./Cart.jsx');
var Products = require('./Products.jsx');

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Products />
        <Cart />
      </div>
    );
  }
});

module.exports = App;
