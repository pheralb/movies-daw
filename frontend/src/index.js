import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 🎨 Bootstrap & styles ->
import 'bootstrap/dist/css/bootstrap.css';
import "styles/global.scss";

// 🟡 Bootstrap Javascript ->
import 'bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
