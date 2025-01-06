import { useState, useEffect } from 'react';
import './App.css';
import { getWebsiteName } from './api/home';
import Home from "./components/home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Recipies from './components/Recipies';
import Dashboard from './components/Dashboard';

function App() {
  const [name, setName] = useState('');

  const fetchWebsiteName = async () => {
    let res = await getWebsiteName();
    setName(res);
  }

  useEffect(() => {
    fetchWebsiteName();
  }, []);

  return (
    <Router>
        <Home name={name} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/recipies" element={<Recipies />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;