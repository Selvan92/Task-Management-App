import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/global.scss'; // comment this line while running local
import getApiBaseUrl from './utils/getApiBaseUrl'; // comment this line while running local

axios.defaults.withCredentials = true;
axios.defaults.baseURL = getApiBaseUrl(); // comment this line while running local

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
);
