import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './pages/Home';
import Features from './pages/Features';
import Guide from './pages/Guide';
import Templates from './pages/Templates';
import Navbar from './components/Navbar/Navbar';
import Altnavbar from './components/Navbar/Altnavbar';
import Loader from './components/Pageerror/Load';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <Router>
      {/* Show loader when the route changes */}
      <PageLoader setLoading={setLoading} />
      
      {/* Display the loading screen when needed */}
      {loading && <Loader loading={loading} />}

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

// Detects Route Changes and Shows Loader
const PageLoader = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate a 2-second loading delay

    return () => clearTimeout(timer); // Cleanup function
  }, [location.pathname]);

  return null;
};

export default App;
