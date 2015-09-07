import Flux from 'fluxette';
import thunk from 'fluxette-thunk';
import reducers from './reducers';

export default Flux(reducers).using(thunk);
