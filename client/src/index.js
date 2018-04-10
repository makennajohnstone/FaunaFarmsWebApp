import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import routes from './routes.js';
//import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDom.render((
  <Router routes={routes}>
    <App />
  </Router>
), document.getElementById('root'));
