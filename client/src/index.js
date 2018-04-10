import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App.js';
//import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDom.render(<App />, document.getElementById('root'));
