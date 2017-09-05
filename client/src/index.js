import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './components/App';
import gotReducer from './reducers/gotReducer'


const store = createStore(
  gotReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
