import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Login from './pages/Login';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Activity from './pages/Activity';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Activity} />
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
