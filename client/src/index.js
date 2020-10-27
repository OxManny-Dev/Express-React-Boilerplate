import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';

import reducer from './redux';
// Provider component to let any component have access to the store

import App from './App';

const store = configureStore({
  reducer,
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('root'));
