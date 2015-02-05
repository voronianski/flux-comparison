'use strict';

import React from 'react';
import ProductItem from '../../../common/components/ProductItem.jsx';
import ProductsList from '../../../common/components/ProductsList.jsx';

let ProductItemContainer = React.createClass({

  onAddToCartClicked() {
    this.props.flux.getActions('app').addToCart(this.props.product);
  },

  render() {
    return (
      <ProductItem
        product={this.props.product}
        onAddToCartClicked={this.onAddToCartClicked}
      />
    );
  },

});

let ProductsListContainer = React.createClass({

  getInitialState() {
    this.actions = this.props.flux.getActions('app');
    this.productStore = this.props.flux.getStore('products');

    return this.getStateFromStores();
  },

  getStateFromStores() {
    return {
      products: this.productStore.getProducts(),
    };
  },

  componentDidMount() {
    this.productStore.addListener('change', this.onStoreChange);
  },

  componentWillUnmount() {
    this.productStore.removeListener('change', this.onStoreChange);
  },

  onStoreChange() {
    this.setState(
      this.getStateFromStores()
    );
  },

  render() {
    let nodes = this.state.products.map(product => {
      return (
        <ProductItemContainer
          flux={this.props.flux}
          key={product.id}
          product={product}
        />
      );
    });

    return (
      <ProductsList title="Flux Shop Demo (Flummox)">
        {nodes}
      </ProductsList>
    );
  },

});

export default ProductsListContainer;
