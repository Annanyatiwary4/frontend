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
import Dashboard from './client/Dashboard';
import Template1Route from './Routes/Template1Route';
// ✅ Import UserProvider
import { UserProvider } from './context/UserContext';
import Template2Routes from './Routes/Template2Route';
import Template3Routes from './Routes/Template3Route';

function App() {
  const [loading, setLoading] = useState(false);

  return (
    // ✅ Wrap Router with UserProvider
    <UserProvider>
      <Router>
        <PageLoader setLoading={setLoading} />

        {loading && <Loader loading={loading} />}

        <MainLayout />
        <Routes>
          {Template1Route}
          {Template2Routes}
          {Template3Routes}
        </Routes>
        
      </Router>
    </UserProvider>
  );
}

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar on Home page, Altnavbar on others */}
      {["/"].includes(location.pathname) ? (
        <Navbar />
      ) : ["/features", "/guide", '/templates'].includes(location.pathname) ? (
        <Altnavbar />
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/features" element={<Features />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

const PageLoader = ({ setLoading }) => {
  const location = useLocation();

  useEffect(() => {
    let timer;

    const delay = setTimeout(() => {
      setLoading(true);
    }, 2000);

    timer = setTimeout(() => {
      clearTimeout(delay);
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(delay);
      clearTimeout(timer);
      setLoading(false);
    };
  }, [location.pathname]);

  return null;
};








export default App;
