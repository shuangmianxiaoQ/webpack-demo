import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Child from 'Child';

const App = () => (
  <div>
    <div>{_.join(['This', 'is', 'App'], ' ')}</div>
    <Child />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
