// import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <div>Hello React!</div>;

ReactDOM.render(<App />, document.getElementById('root'));

// 使用`babel`转换`ES6`代码
const arr = [new Promise(() => {}), new Promise(() => {})];

arr.map(item => console.log(item));
