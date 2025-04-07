import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { BtsSio } from './pages/BtsSio';
import { Projects } from './pages/Projects';
import { Stages } from './pages/Stages';
import { Veille } from './pages/Veille';

function App() {
  return (
    <Router>
      <div className="min-h-screen pt-20"> {/* Changed pt-16 to pt-20 to match new navbar height */}
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bts" element={<BtsSio />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/stages" element={<Stages />} />
            <Route path="/veille" element={<Veille />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;