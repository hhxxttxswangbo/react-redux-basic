import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//导入Provide 父传子传递store 并包裹App
import { Provider } from 'react-redux';
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);