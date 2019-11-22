import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import comments from './reducers/comments';

import App from './container';

const initialState = (localStorage.getItem('comments')) ? JSON.parse(localStorage.getItem('comments')) : []

const store = createStore(comments, initialState);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);