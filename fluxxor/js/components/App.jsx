import React, { Component, PropTypes } from 'react';
import CartContainer from './CartContainer.jsx';
import ProductsContainer from './ProductsContainer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const flux = this.props.flux;
        return (
            <div>
                <ProductsContainer flux={flux} />
                <CartContainer flux={flux} />
            </div>
        );
    }
}

App.propTypes = {
    flux: PropTypes.object.isRequired
};

export default App;
