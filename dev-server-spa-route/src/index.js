import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" render={() => <div>Home Page</div>} />
        <Route path="/about" render={() => <div>About Page</div>} />
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
