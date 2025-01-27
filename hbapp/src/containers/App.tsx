// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Journal from './Journal';
import About from './About';
import Join from './Join';
import Hue from './Hue';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/HueBand/" element={<Landing />} />
        <Route path="/HueBand/journal" element={<Journal />} />
        <Route path="/HueBand/hueseries" element={<Hue />} />
        <Route path="/HueBand/joinus" element={<Join />} />
        <Route path="/HueBand/aboutus" element={<About />} />

      </Routes>
    </Router>
  );
}

export default App;
