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
import Register from './pages/Register';

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
        <Route path="/register" element={<Register />} />
        <Route path="/features" element={<Features />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/templates" element={<Templates />} />
      </Routes>
    </>
  );
};




const PageLoader = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    let timer;

    // Start a delay, only show the loader if loading takes longer than 300ms
    const delay = setTimeout(() => {
      setLoading(true);
    }, 2000);

    // Fake "actual" page load detection
    timer = setTimeout(() => {
      clearTimeout(delay); // Cancel showing the loader if already loaded
      setLoading(false);
    }, 2000); // Adjust this time based on your actual page load times

    return () => {
      clearTimeout(delay);
      clearTimeout(timer);
      setLoading(false); // Clean up on unmount
    };
  }, [location.pathname]);

  return null;
};





export default App;
