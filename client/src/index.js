import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
    <img id ="bird1" src = "https://lh3.googleusercontent.com/proxy/c81tBTxBN0baKEXbhPV4fMG_jLp6TT4yd4wox9-tBcC1Ltj20IVycE0PXGe4fnlw-aHqwqpzpbydcw5tjrxBjelN3gZO8tRmvqpZ39ZJn6zM" />
      <img id ="bird2" src = "https://lh3.googleusercontent.com/proxy/c81tBTxBN0baKEXbhPV4fMG_jLp6TT4yd4wox9-tBcC1Ltj20IVycE0PXGe4fnlw-aHqwqpzpbydcw5tjrxBjelN3gZO8tRmvqpZ39ZJn6zM" />
      <img id ="bird3" src = "https://lh3.googleusercontent.com/proxy/c81tBTxBN0baKEXbhPV4fMG_jLp6TT4yd4wox9-tBcC1Ltj20IVycE0PXGe4fnlw-aHqwqpzpbydcw5tjrxBjelN3gZO8tRmvqpZ39ZJn6zM" />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
