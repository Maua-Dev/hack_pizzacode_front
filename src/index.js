import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import AppRouter from './AppRouter';
import {OrderProvider} from './contexts/Order';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <OrderProvider>
      <AppRouter />
      </OrderProvider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();