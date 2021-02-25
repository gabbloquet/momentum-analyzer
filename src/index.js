import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store";
import App from "./App";
import 'awesome-notifications/dist/style.css';
import './style/style.css';

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
