import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App className="App" />
  </Provider>,

  document.getElementById('root')
);

serviceWorker.register();
