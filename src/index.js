import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
//import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
//import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';
import { store } from './redux/store';

ReactDOM.render((
    <BrowserRouter>
    <Provider store={store}>
        <App />      
    </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
