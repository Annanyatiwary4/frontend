import { useState, useEffect, use } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import "./App.css";
import "./index.css";

import Home from "./pages/Home";
import Features from "./pages/Features";
import Guide from "./pages/Guide";

import Register from "./pages/Register";
import Dashboard from "./client/Dashboard";

import Navbar from "./components/Navbar/Navbar";
import Altnavbar from "./components/Navbar/Altnavbar";

import EmailVerify from "./shared/VerifyEmail";
import Error from "./shared/Error";
import Login from "./pages/Login";
import  { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";
import Loader from "./components/Pageerror/Loader";

import ForgotPasswordPage from "./shared/ForgotPassword";
import ResetPasswordPage from "./shared/ResetPassword";
import { Templates } from "./pages/Templates";
import Preview from "./components/EditorLayout/Preview";
import EditorLayout from "./client/Editor";
import Editor from "./client/Editor";



// protect authenticated routes

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated || !user) {
    return <Login />;
  }

  if(!user.isVerified) {
    return <EmailVerify />;
  }

  return children;
}


function App() {
  const [loading, setLoading] = useState(false);
 // const {isCheckingAuth,checkAuth}= useAuthStore();
 // useEffect(() => {
  //  checkAuth();
 // },[checkAuth]);
  //if(isCheckingAuth) return <Loader />;

  return (
    <Router>
      

      <Routes>
        {/* 👇 Main layout wraps all normal pages */}
        <Route path="/*" element={<MainLayout />} />
      </Routes>
    </Router>
  );
}

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      {/* 👇 Dynamic navbar switch */}
      {["/"].includes(location.pathname) ? (
        <Navbar />
      ) : ["/features", "/guide", "/templates"].includes(location.pathname) ? (
        <Altnavbar />
      ) : null}

      {/* 👇 All app routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={
         
          <Register />
          
            }/>
         
        <Route path="/login" element={
          
          <Login />
          } />
        
        <Route path="/features" element={<Features />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/dashboard" element={
          // <ProtectedRoute>
          <Dashboard />
          // </ProtectedRoute>
          } />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route path="/error" element={<Error />} />
        <Route path="/forgot-password" element={
          
           <ForgotPasswordPage />
         
          } />

          <Route path="/reset-password/:token" element={ <ResetPasswordPage /> } />
        
         <Route path="/editor/:projectId" element={<Editor />} />
      </Routes>
      <Toaster />
    </>
  );
};



export default App;
