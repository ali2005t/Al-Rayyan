import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Splash from './components/Splash';
import Home from './pages/Home';
import './i18n';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Router>
      <AnimatePresence>
        {showSplash ? (
          <Splash key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <Routes key="routes">
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
}
