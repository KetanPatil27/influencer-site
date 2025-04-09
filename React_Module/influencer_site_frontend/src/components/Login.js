import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8080/api/auth/login', form);
      const token = 'Bearer ' + res.data.token;
      localStorage.setItem('token', token);
      setToken(token);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="container mt-5">
      <h3>Admin Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          className="form-control my-2"
          placeholder="Username"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className="form-control my-2"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button className="btn btn-success">Login</button>
      </form>
    </div>
  );
}

export default Login;
