import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
