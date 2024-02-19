import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const loadingPhrases = [
  "We are what we eat. Does that mean we are all Apple fans?",
  "Linux was created in 1991 by Linus Torvalds. He is also a founder of git!",
  "We hope your fellow didn't break the database.",
  "Are you already looking forward to the sea breeze in Dubai?",
  "It's time for cybercoding!",
  "Problems with English? Use Duolingo to fix that, but be careful with this big green chicken in the dark.",
  "Is the universe determinated?",
  "Depot Developers were trying to download React Native for 10 hours. Damn it, let's do a website first"
]

const currentLoadingPhrase = loadingPhrases[Math.floor(Math.random() * loadingPhrases.length)]

root.render(
  <React.StrictMode>
    <Αpp />
  </React.StrictMode>
);

reportWebVitals();
