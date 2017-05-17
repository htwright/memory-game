import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// import Card from './components/card';
import Board from './components/board';

const elements=[[1, 2, 3 , 4], [1, 2, 3, 4], [1, 2, 3, 4]];


ReactDOM.render(
  <Board elements={elements}/>,
  document.getElementById('root')
);
