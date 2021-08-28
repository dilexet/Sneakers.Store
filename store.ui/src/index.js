import React from 'react';
import ReactDOM from 'react-dom';


import App from './App';
import './css/index.css';
import 'semantic-ui-css/semantic.min.css';
import './css/style.css';

// TODO: Too many re-renders. React limits the number of renders to prevent an infinite loop.
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

