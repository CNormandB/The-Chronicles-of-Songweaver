import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CharacterSelection from '../pages/CharacterSelection';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characterselection" element={<CharacterSelection/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;