import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
const basename = '/MovieSuggestions';

root.render(
  // Use '/' during local development and '/moviepicker' for production GitHub Pages
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);


