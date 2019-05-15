import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => (
  <Router>
    <Route exact path="/" render={() => <div>Home Page</div>} />
    <Route path="/about" render={() => <div>About Page</div>} />
  </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
