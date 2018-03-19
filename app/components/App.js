var React = require('react');
var Popular = require('./Popular');

// Component Definition
class App extends React.Component {
  render() {
    return(
      <div className='container'>
        <Popular />
      </div>
    )
  }
  // whatever render returns is the UI of the component
  // this is JSX (JSX gets turned into JavaScript)
}

module.exports = App;
