import React from 'react';
import Fluxxor, { StoreWatchMixin } from 'Fluxxor';

const FluxMixin = Fluxxor.FluxMixin(React);
export default function (Component, stores, getState) {
    const ConnectedComponent = React.createClass({
        mixins: [FluxMixin, StoreWatchMixin(...stores)],

        getStateFromFlux: function() {
            return getState(this.getFlux(), this.props, this.state);
        },

        render: function() {
            return (
                <Component
                    flux={this.getFlux()}
                    {...this.props}
                    {...this.state}
                />
            );
        }
    });

    return ConnectedComponent;
};
