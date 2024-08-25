import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import './App.css';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/auth/:type" element={<AuthPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>
          <ToastContainer /> {/* Add ToastContainer here */}
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
