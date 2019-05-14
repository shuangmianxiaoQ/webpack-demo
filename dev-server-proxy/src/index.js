import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios
      .get('/users/shuangmianxiaoQ')
      .then(res => console.log(res));
  }

  render() {
    return <div>Hello React!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
