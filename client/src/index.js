import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './styles/index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose } from 'redux'
import gotReducer from './reducers/gotReducer'
import thunk from 'redux-thunk'
import App from './components/App';

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
