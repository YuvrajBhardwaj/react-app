import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { auth, provider } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './AuthPage.css';

const AuthPage = () => {
  const { type } = useParams(); // Get 'type' from the URL, either 'login' or 'signup'
  const navigate = useNavigate(); // Hook for programmatic navigation
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (type === 'signup') {
        await createUserWithEmailAndPassword(auth, email, password);
        toast.success('Sign Up Successful!', { position: "top-right" });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        toast.success('Login Successful!', { position: "top-right" });
        navigate('/dashboard'); // Navigate to dashboard on successful login
      }
    } catch (error) {
      console.error(`Error during ${type}`, error);
      toast.error(`Error during ${type}: ${error.message}`, { position: "top-right" });
    }
  };

  const handleGoogleAuth = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success('Login with Google Successful!', { position: "top-right" });
      navigate('/dashboard'); // Navigate to dashboard on successful Google login
    } catch (error) {
      console.error('Error with Google authentication', error);
      toast.error('Error with Google authentication: ' + error.message, { position: "top-right" });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="text-center mb-4">{type === 'signup' ? 'Sign Up' : 'Login'}</h2>
        <Form onSubmit={handleAuth}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="mt-3 position-relative">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="link"
              className="position-absolute top-50 end-0 translate-middle-y"
              onClick={() => setShowPassword(!showPassword)}
              style={{ background: 'transparent', border: 'none' }}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </Button>
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3 w-100">
            {type === 'signup' ? 'Sign Up' : 'Login'}
          </Button>
          <Button variant="outline-primary" className="mt-3 w-100" onClick={handleGoogleAuth}>
            {type === 'signup' ? 'Sign Up with Google' : 'Login with Google'}
          </Button>
        </Form>
      </div>
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default AuthPage;
