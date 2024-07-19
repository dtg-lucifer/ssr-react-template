// src/client.jsx
import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import "./styles/__globals.css";


hydrateRoot(document.getElementById('root')!, <App />);