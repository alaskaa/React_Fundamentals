// requiring React and ReactDOM from our package.json dependencies
var React = require('react');
var ReactDOM = require('react-dom');
require('./index.css');

// state
// lifecycle event
// UI (of component)
// component always needs UI associated with it (that's rendered)

// Component Definition
class App extends React.Component {
  render() {
    return(
      <div>
        Hello React Training!
      </div>
    )
  }
  // whatever render returns is the UI of the component
  // this is JSX (JSX gets turned into JavaScript)
}

//

// render our component to the DOM
ReactDOM.render(
  <App />, document.getElementById('app')
);
