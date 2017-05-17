import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import Card from './components/card';
import Board from './components/board';

const elements=[{},{}, {}]

ReactDOM.render(
  <Board elements={elements}/>,
  document.getElementById('root')
);
