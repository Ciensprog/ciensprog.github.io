import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';

import 'virtual:svg-icons-register';
import './index.css';

/*
|--------------------------------------------------------------------------
| Main
|--------------------------------------------------------------------------
|
| ...
|
*/

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root'),
);
