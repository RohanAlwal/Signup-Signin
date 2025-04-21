import { useState } from 'react';
import axios from 'axios';
import '../App.css';
import './AuthForm.css';

export default function AuthForm({ isSignIn }) {
  const [form, setForm] = useState({ email: '', password: '', username: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [toast, setToast] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const endpoint = isSignIn ? '/signin' : '/signup';
      const payload = isSignIn
        ? { email: form.email, password: form.password }
        : form;

      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/auth${endpoint}`,
        payload
      );

      showToast(data.message || 'Success');
    } catch (err) {
      showToast(err.response?.data?.message || 'Something went wrong!', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {toast && (
        <div className={`toast ${toast.type}`}>
          {toast.msg}
        </div>
      )}

      <form onSubmit={handleSubmit} className="form-body">
        {!isSignIn && (
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Your Name"
            className="input"
            required
          />
        )}

        <div className="tooltip-container">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="input"
            required
          />
          <span className="tooltip">Enter a valid email 📩</span>
        </div>

        <div className="tooltip-container relative">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="input"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="show-btn"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
          <span className="tooltip">Strong password = 💪</span>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? <span className="loader"></span> : (isSignIn ? 'Sign In' : 'Sign Up')}
        </button>
      </form>
    </>
  );
}
