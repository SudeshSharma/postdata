import * as React from 'react'
import * as ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory';
import App from './App'
import rootSaga from './store/index'
import * as serviceWorker from './serviceWorker'
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {rootReducer} from './store/index'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({realtime:true})
const history = createHistory();
const sagaMiddleware=createSagaMiddleware();
const middleware=applyMiddleware(routerMiddleware(history),sagaMiddleware)
const store = createStore(rootReducer,composeEnhancers(middleware))
sagaMiddleware.run(rootSaga);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))

serviceWorker.unregister()

//create-react-app code
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


// serviceWorker.unregister();
