import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Detail from './pages/Detail.jsx';

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property/:id" element={<Detail />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById('root')).render(<App />);
