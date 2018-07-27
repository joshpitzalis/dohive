import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import Workboard from './pages/Workboard';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={Workboard} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();
