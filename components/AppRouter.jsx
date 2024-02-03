import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CharacterSelection from '../pages/CharacterSelection';
import D20RollerPage from '../pages/D20RollerPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characterselection" element={<CharacterSelection/>}/>
        <Route path="/d20roller" element={<D20RollerPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;