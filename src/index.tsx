import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Homepage from './Homepage';
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from './reportWebVitals';
import rootReducer from "./store";
import './style/style.css';

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
