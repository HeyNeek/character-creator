import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import bird from './bird.gif'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
    <img id ="bird1" src = {bird} />
    <img id ="bird2" src = {bird} />
    <img id ="bird3" src = {bird} />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
