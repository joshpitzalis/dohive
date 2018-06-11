import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './pages/Login';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './pages/Dashboard';

import { Router, Link } from '@reach/router';

let Auth = () => <Login />;
let Dash = () => <Dashboard />;

const Routes = () => (
  <Router>
    <Auth path="/" />
    <Dash path="dashboard" />
  </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
