import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Menu from '../pages/Menu'
import CharacterSelection from '../pages/CharacterSelection';
import Gameplay from '../pages/Gameplay';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/characterselection" element={<CharacterSelection/>}/>
        <Route path="/gameplay" element={<Gameplay/>}/>
      </Routes>
    </Router>
  );
};

export default AppRouter;