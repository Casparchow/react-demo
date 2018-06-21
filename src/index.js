import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
// 引入reducer
import reducer from './store/reducers'

// 创建一个初始化的state
var initState = {
  formData: {
    name: '',
    email: '',
    message: ''
  }
}

// 创建store
const store = createStore(reducer, initState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
