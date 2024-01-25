import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from '../components/AppRouter';
import './App.css'

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App
