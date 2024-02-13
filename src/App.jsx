import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from '../components/AppRouter';
import './App.css';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

export default App;
