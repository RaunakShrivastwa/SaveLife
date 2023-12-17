import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './static/style.css';
import './static/nav.css'
import './static/home.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

