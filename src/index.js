import React from 'react';
import dotenv from 'dotenv'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from './reportWebVitals';
import rootReducer from "./store";
import App from "./App";
import './style/style.css';

dotenv.config()

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
