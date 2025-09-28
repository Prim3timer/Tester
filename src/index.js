import React from 'react';
import ReactDOM from 'react-dom/client';

import './other.css';
import App from './App';
import {disableReactDevTools} from "@fvilers/disable-react-devtools"

if (process.env.NODE_ENV === 'poduction') disableReactDevTools()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


