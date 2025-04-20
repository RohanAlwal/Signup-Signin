import { useState } from 'react';
import AuthForm from './components/AuthForm';
import './App.css'; // Import CSS

export default function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="app-container">
      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <button
        className="dark-toggle"
        onClick={() => document.body.classList.toggle('dark')}
      >
        🌓
      </button>

      <div className="form-container">
        <h1 className="form-title">
          {isSignIn ? 'Damn.. Hello' : 'Create an Account 🚀'}
        </h1>
        <AuthForm isSignIn={isSignIn} />
        <p className="form-footer">
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => setIsSignIn(!isSignIn)} className="switch-btn">
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>

      <div className="liquid-bg"></div>
    </div>
  );
}
