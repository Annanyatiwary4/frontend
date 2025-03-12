import './App.css';
import './index.css';
import Home from './pages/Home';
import Features from './pages/Features';
import Guide from './pages/Guide';
import Templates from './pages/Templates';
import Navbar from './components/Navbar/Navbar';
import Altnavbar from './components/Navbar/Altnavbar';

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation(); 

  return (
    <>
      {/* Show Navbar on Home page, Altnavbar on others */}
      {location.pathname === "/" ? <Navbar /> : <Altnavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </>
  );
};

export default App;
