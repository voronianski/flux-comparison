var Dispatcher = require('flux').Dispatcher;
var Constants = require('./Constants');
var PayloadSources = Constants.PayloadSources;

var AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
    var payload = {
        source: PayloadSources.VIEW_ACTION,
        action: action
    };
    this.dispatch(payload);
};

AppDispatcher.handleServerAction = function (action) {
    var payload = {
        source: PayloadSources.SERVER_ACTION,
        action: action
    };
    this.dispatch(payload);
};

module.exports = AppDispatcher;
