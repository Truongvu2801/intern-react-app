import React from 'react';
import ReactDOM from 'react-dom';
import {Provider , } from 'react-redux';
import { createStore, applyMiddleware ,compose} from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducers from './reducers/index';
const handler = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    appReducers,
    handler(applyMiddleware(thunk))
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));

serviceWorker.unregister();

export default store;