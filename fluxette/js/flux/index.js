import Flux, { thunk } from 'fluxette';
import stores from './stores';

let flux = Flux(stores);
flux.use([thunk]);

export default flux;
