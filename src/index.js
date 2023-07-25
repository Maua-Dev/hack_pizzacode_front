import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';


import AppRouter from './AppRouter'; 
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <AppRouter /> {App}
    </Router>
  </StrictMode>
);

