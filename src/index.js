import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/root.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/header.css';
import './styles/home.css';
import './styles/offer.css';
import './styles/realizations.css';
import './styles/contact.css';
import './styles/footer.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);