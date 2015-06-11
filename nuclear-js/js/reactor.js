import { Reactor } from 'nuclear-js'
import CartStore from './stores/CartStore'
import ProductStore from './stores/ProductStore'

const reactor = new Reactor({ debug: true })

reactor.registerStores({
  cart: CartStore,
  products: ProductStore,
})

export default reactor
