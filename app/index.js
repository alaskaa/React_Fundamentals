// requiring React and ReactDOM from our package.json dependencies
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');
var App = require('./components/App');

// state
// lifecycle event
// UI (of component)
// component always needs UI associated with it (that's rendered)



//

// render our component to the DOM
ReactDOM.render(
  <App />, document.getElementById('app')
);
