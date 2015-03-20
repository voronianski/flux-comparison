import React from 'react';
import CartContainer from './CartContainer.jsx';
import ProductsContainer from './ProductsContainer.jsx';

let App = React.createClass({
    render() {
        let { context } = this.props;

        return (
            <div>
                <ProductsContainer context={context}/>
                <CartContainer context={context}/>
            </div>
        );
    }

});

export default App;
