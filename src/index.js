import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Routes from './config/routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));

registerServiceWorker();
