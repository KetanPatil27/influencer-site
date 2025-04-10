import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [admin, setAdmin] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:8080/api/admin/login', admin, { withCredentials: true });
      navigate('/dashboard');
    } catch (err) {
      alert('❌ Login failed! Please check your email and password.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5 d-flex flex-column align-items-center" style={{ minHeight: '80vh' }}>

      {/* Greeting Message */}
      <div className="mb-4 text-center">
        <h2 className="fw-bold" style={{ fontSize: '1.8rem' }}>
          👑 Welcome, SRK!
        </h2>
        <p className="fw-semibold text-white text-center" style={{ fontSize: '1.2rem' }}>
  ✨ Step into your kingdom 👑 and see what your fans 👥 are saying.<br />
  💫 Let’s make it magical! 🎬🌟
</p>

      </div>

      {/* Login Box */}
      <div className="shadow p-5 bg-white rounded w-100" style={{ maxWidth: "420px" }}>
        <h3 className="mb-4 text-center text-primary fw-bold">Admin Login</h3>
        <form onSubmit={handleLogin} autoComplete="off">
          <div className="form-floating mb-3">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Email"
              value={admin.email}
              onChange={(e) => setAdmin({ ...admin, email: e.target.value })}
              required
            />
            <label htmlFor="email">Email address</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              value={admin.password}
              onChange={(e) => setAdmin({ ...admin, password: e.target.value })}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold"
            disabled={loading}
          >
            {loading ? '⏳ Logging in...' : 'Login'}
          </button>
        </form>

        {/* Home Page Button */}
        <button
          onClick={() => navigate('/')}
          className="btn btn-outline-secondary w-100 fw-bold mt-3"
        >
          🏠 Go to Home Page
        </button>
      </div>
    </div>
  );
}

export default Login;
