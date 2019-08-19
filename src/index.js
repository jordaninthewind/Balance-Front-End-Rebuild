import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
