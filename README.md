# Flux Comparison by Example

> Similar app implemented with different [Flux](https://facebook.github.io/flux/) solutions including Facebook's, Yahoo's and others.

[![](https://farm9.staticflickr.com/8643/16226391077_424b0a87dd.jpg)](http://pixelhunter.me/post/110248593059/flux-solutions-compared-by-example)

## Usage

Clone this repo and run `npm install` inside it.

Before checking any of the included solutions you will need to:

0. Go to solution folder (e.g. `cd facebook-flux`, `cd redux`, etc.)
1. Run `npm install` to install dependencies of a specific app
2. Run `npm start` to build js resources with [Browserify](http://browserify.org)
3. Open `index.html` in the browser

## Demo

Select several products from _Flux Online Shop_ and add them to cart. Open browser console and click _Checkout_ button, you'll see payload with products that you just "bought".

[![](https://dl.dropboxusercontent.com/u/100463011/flux-shop-demo2.gif)](http://labs.voronianski.com/flux-comparison)

http://labs.voronianski.com/flux-comparison

**You may find few notes about all implementations on my [blog](http://pixelhunter.me/post/110248593059/flux-solutions-compared-by-example).**

Discussion on HackerNews - https://news.ycombinator.com/item?id=8989495.

## Examples

The list of Flux related implementations used in this demo.

### Ready

* [x] [Facebook Flux](https://github.com/voronianski/flux-samples/tree/master/facebook-flux)
* [x] [Fluxible by Yahoo](https://github.com/voronianski/flux-samples/tree/master/yahoo-fluxible)
* [x] [Reflux](https://github.com/voronianski/flux-samples/tree/master/reflux)
* [x] [Alt](https://github.com/voronianski/flux-samples/tree/master/alt)
* [x] [Flummox](https://github.com/voronianski/flux-samples/tree/master/flummox)
* [x] [Marty.js](https://github.com/voronianski/flux-samples/tree/master/marty)
* [x] [McFly](https://github.com/voronianski/flux-samples/tree/master/mcfly)
* [x] [Lux](https://github.com/voronianski/flux-comparison/tree/master/lux)
* [x] [Material Flux](https://github.com/voronianski/flux-comparison/tree/master/material-flux)
* [x] [Redux](https://github.com/voronianski/flux-comparison/tree/master/redux)
* [x] [Redux + Flambeau](https://github.com/voronianski/flux-comparison/tree/master/redux-flambeau)
* [x] [Nuclear.js](https://github.com/voronianski/flux-comparison/tree/master/nuclear-js)
* [x] [Fluxette](https://github.com/voronianski/flux-comparison/tree/master/fluxette)
* [x] [Fluxxor](https://github.com/voronianski/flux-comparison/tree/master/fluxxor)
* [x] [Freezer](https://github.com/voronianski/flux-comparison/tree/master/freezer-js)

### Next

_You're welcome to create [issues](https://github.com/voronianski/flux-comparison/issues) with suggestions or even make your own [pull-requests](https://github.com/voronianski/flux-comparison/pulls) (but before please take a look on [contributing guidelines](https://github.com/voronianski/flux-comparison/blob/master/CONTRIBUTING.md))._

## Resources

### Libraries

- https://github.com/facebook/flux
- http://fluxible.io
- https://github.com/spoike/refluxjs
- https://github.com/goatslacker/alt
- https://github.com/kenwheeler/mcfly
- https://github.com/acdlite/flummox
- https://github.com/LeanKit-Labs/lux.js
- https://github.com/azu/material-flux
- http://martyjs.org
- https://github.com/gaearon/redux
- https://github.com/BurntCaramel/flambeau
- https://optimizely.github.io/nuclear-js
- https://github.com/edge/fluxette
- https://github.com/BinaryMuse/fluxxor
- https://github.com/arqex/freezer

### Articles

- http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html
- http://www.code-experience.com/async-requests-with-react-js-and-flux-revisited
- http://spoike.ghost.io/deconstructing-reactjss-flux
- https://medium.com/@dan_abramov/the-evolution-of-flux-frameworks-6c16ad26bb31

### Non React.js examples

The [flux demo app](http://labs.voronianski.com/flux-comparison/) was also implemented by enthusiasts without React.js but with another view layer:

* [Riot + RiotControl](https://github.com/txchen/feplay/tree/gh-pages/riot_flux)
* [flux-riot demo](https://github.com/mingliangfeng/flux-riot-demo)
* [idom-redux-todomvc-app (incremental-dom + redux)](https://github.com/joshthecoder/idom-redux-todomvc-app)
* [Polymer with Reflux](https://github.com/devinivy/polymer-funky-flux)

## Contributing

See [CONTRIBUTING.md](https://github.com/voronianski/flux-comparison/blob/master/CONTRIBUTING.md).

---

**MIT Licensed**
