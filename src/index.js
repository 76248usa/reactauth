import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './common/Header';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';


//Set main base url
axios.defaults.baseURL= 'http://127.0.0.1:8000/api';
//Bearer token save
axios.defaults.headers.common[
  'Authorization'
] = 'Bearer '+localStorage.getItem('token')


ReactDOM.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
