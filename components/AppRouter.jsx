import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CharacterSelection from '../pages/CharacterSelection';
import Gameplay from '../pages/Gameplay';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characterselection" element={<CharacterSelection/>}/>
        <Route path="/gameplay" element={<Gameplay/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;