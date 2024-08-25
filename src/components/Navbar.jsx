import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <nav className={`navbar ${theme}`}>
      <div className="navbar-brand">
        <Link to="/">MyApp</Link>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <span>Welcome, {user.email}</span>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/auth/login">Login</Link>
            <Link to="/auth/signup">Signup</Link>
          </>
        )}
        <button onClick={toggleTheme}>
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
